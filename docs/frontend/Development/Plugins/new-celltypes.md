---
sidebar_position: 4
---

# Adding a new cell type

:::info
Please see the details of a static evaluation process [here](../Evaluation/Static.md)
:::
## Cell processors
A processor is a so-called handler function, which is called one-by one from the pool for every cell, that is undergoing the evaluation process.

:::note
All processors must be loaded using 

```js
"wl": "src/processor.wl"
```

directive in `package.json` `wljs-meta` directly to the master kernel.
:::

Let us have a look at the example from [wljs-mermaid-support](https://github.com/JerryI/wljs-mermaid-support), that adds [Mermaid](https://mermaid.js.org/syntax/flowchart.html) diagrams as a separate cell type

*src/processor.wl* 
```mathematica
BeginPackage["JerryI`WolframJSFrontend`MermaidSupport`"];

Begin["Private`"];

MermaidQ[str_] := StringMatchQ[str, ".mermaid\n"~~___];

MermaidProcessor[expr_String, signature_String, parentCell_String, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},
  Print["MermaidProcessor!"];
  callback[
      str,
      CreateUUID[], 
      "mermaid",
      Null
  ];
];

JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(MermaidQ ->  <|"SyntaxChecker"->(True&),               "Epilog"->(#&),             "Prolog"->(#&), "Evaluator"->MermaidProcessor  |>), "HighestPriority"];


End[];

EndPackage[];
```

Here we have one of the plugin API functions
```mathematica
JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[TypeQ_ -> Processor_Association, priority_String]
```

### Type checking
`TypeQ` simply checks if the text of an input cell match something, if it is so, then the `Processor` structure will be applied for the evaluation

```mathematica
MermaidQ[str_] := StringMatchQ[str, ".mermaid\n"~~___];
```

This one simply checks the first line for the keyword `.mermaid`, that user types. To help a code editor make a right guess in terms of syntax highlighting - see section [Editor extensions](#Editor%20extensions).

### Evaluation pipeline
The structure is following
```mathematica
<|"SyntaxChecker"->(True&),               
  "Epilog"->(#&),
  "Prolog"->(#&), 
  "Evaluator"->MermaidProcessor  
|>
```

A syntax checking (optionally) function must be provided. If you are lazy like me, you might use a pure function, that always returns true. If `"SyntaxChecker"` function returns anything except `True`, this message will be shown to a user and an evaluation will be interrupted.

`"Prolog"` is not used for now, while `"Epilog"` is applied to a string before the evaluation, so you can for example apply it to split it into a list of expressions like it was done in [wljs-editor](https://github.com/JerryI/wljs-editor/blob/main/src/processor.wl)

#### Evaluator
This is the most important part of a structure. It has 3 arguments
```mathematica
MermaidProcessor[expr_String, signature_String, parentcell_String, callback_] := ...
```

`expr` is a string, that represents a data from the input cell (including the first line!).
`signature` is basically a notebook identifier.
`parentCell` is an uid of the input cell from which the code was called for evaluation
`callback` is a function, that must be called, when the evaluation is done.

The simplest step by step workflow will be
- clean up the `expr` to remove the first line
- send an expression to an evaluator (whatever that means) and ask to call back the `callback` function

In our example of Mermaid diagrams, there is no need in evaluating the code on the secondary kernel, since mermaid engine works on browser's side only, i.e. 

```mathematica
MermaidProcessor[expr_String, signature_String, parent_String, callback_] := Module[{str = StringDrop[expr, StringLength[First[StringSplit[expr, "\n"]]] ]},

  callback[
      str,
      CreateUUID[], 
      "mermaid",
      Null
  ];
];
```

Let us have a look at the `callback` function
```mathematica
callback[data_String, uid_String, view_String, post_, opts___]
```

It tells frontend to create a new cell and broadcast this event, so it will appear in your notebook. Also this is the only thing that tell the evaluation has finished.

:::tip
If you need to generate multiple cells, one can call `callback` multiple times even with the same parameters provided. An output cells will be stacked after each other automatically.

Another way is to split an expression in a `List` using `"Epilog"` function from above.
:::

- `data` is a content;
- `uid` is an identifier of a new cell, that will be created;
- `post` is applied on a `CellObj[]`, that comes after the evaluation (a new output cell basically), so have modify a cell before it will be published to a user;
- `view` is a name of a view component [View component](#View%20component) used to display result in the browser. The default value can be
	- `"codemirror"` - a normal universal editor
	- `"markdown"` - renders markdown
	- ...

You can also provide the following options
- `"Type"` - overrides the general type of a generated cell, by the default it is `"output"`, but you can change it to `"input"` 
- `"After"` - specify the UID of a cell after which it will be inserted. By the default it uses an identifier of an input cell, in which the evaluator was called. But you can override it using the id of other generated cell like it was done in [wljs-chatbook](https://github.com/JerryI/wljs-chatbook-support). There is also a "special value" to be provided `"After"->"Before"`, that will tell a cell manager to move a new cell above the input cell that was called. 
- `"Props"` - provide properties to a new cell like if you want cell to be hidden, use `"Props"-><|"hidden"->True|>`

##### Calling secondary Kernel
Of course there is a way to perform handling on a secondary kernel like normal. For that you should find a notebook using `signature` and use its attached kernel to do your stuff

**normal wolfram language evaluation**
```mathematica
JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`WolframEvaluator[data_, block_, signature, Null], callback, "Link"->"WSTP"];
```
here `data` is a string with an expression you want to evaluate, and `block` is a boolean parameter that tell if you need an output to be printed or not (the default should be `False`). Wolfram Kernel will provide all types to `callback` automatically. 

The view component is `codemirror`. As an example, please have a look at [wljs-editor](https://github.com/JerryI/wljs-editor/blob/main/src/processor.wl)

**template engine**
```mathematica
JerryI`WolframJSFrontend`Notebook`Notebooks[signature]["kernel"][JerryI`WolframJSFrontend`Evaluator`TemplateEvaluator[data_, signature, view_, Null], callback, "Link"->"WSTP"];
```
here it is almost the same, but is uses [WSP template engine](https://github.com/JerryI/wl-wsp) to process the string and calls `callback` with a given `view` parameter provided.

This is common case for [wljs-html-support](https://github.com/JerryI/wljs-html-support) for example, i.e. [HTML cells](../../Cell%20types/HTML.md)

**custom engine**
Since `package.json` has a special field `"wlkernel"` to load modules into secondary kernel, you can also define your own evaluator like it was done in [wljs-wlx-support](https://github.com/JerryI/wljs-wlx-support/blob/main/src/evaluator.wl).

## Editor extensions
This is pure Javascript side and it runs in the browser (client desktop app)
### Syntax highlighting (optional)
When you add a new cell, you can tell an editor to highlight the syntax in a way you like.
This can be done using a `"jsmodule"` field in `package.json`. 

For example [wljs-html-support](https://github.com/JerryI/wljs-html-support)

**kernel.js**
```js
window.SupportedLanguages.push({
	check: (r) => {return(r[0] === '.html')},
	plugins: [window.html()],
	name: window.htmlLanguage.name
});
```

where `plugins` tells, which extensions for CodeMirror 6 editor must be loaded for this type of a cell as well as some internal name for the language used.

:::info
If you does not specify `SupportedLanguages`, the standard highlighting will be applied, i.e.  only special characters and non-language specific
:::

If you want to reuse the syntax highlighters from other packages, feel free to use them in a way like

```js
  window.SupportedLanguages.push({
    check: (r) => {return(r[0] === '.mylang')},
    plugins:  window.EditorMathematicaPlugins,
    legacy: true, 
    name: 'mathematica'
  });
```

### View component
This is rather much more important, if you are using custom cells, that does not represent `markdown` or `html` text.

In the [Evaluator](#Evaluator) section we mentioned `view` components. There are a few prebuilt components are available
- `codemirror` - default editor
- `markdown` - markdown renderer
- `html` - html renderer
- `js` - js evaluator

All of them works as it is, so there is no need in changing anything in [Evaluator](#Evaluator), except the string in a `view` field.

If you want to write your own, the following structure must be used

**kernel.js**
```js
//just for lazy loading
let mermaidDiagrams = false;

class MermaidCell {
  dispose() {
    //what to do if someone removes a cell
    //free up memory or remove listeners
  }

  constructor(parent, data) {
	//creare a wrapper element
    let elt = document.createElement("div");
    
    elt.classList.add("frontend-object");
    elt.style.display = "block";
    
    parent.element.appendChild(elt);
    parent.element.classList.add('padding-fix');
  
    let container = document.createElement("div");
    
	//mermaid specific thing (lazy loading)
    if (!mermaidDiagrams) {
      import("mermaid").then(({ default: mermaid }) => {
        mermaidDiagrams = mermaid;
        mermaidDiagrams.initialize({ startOnLoad: false });
        mermaidDiagrams.render(container, data).then((data)=>{
          const {svg, bindFunctions} = data;
          //set the data of an DOM element
          container.innerHTML = svg;
        });  
      });
    
    } else {
      mermaidDiagrams.render(container, data).then((data)=>{
        const {svg, bindFunctions} = data;
        //set the data of an DOM element
        container.innerHTML = svg;
      });
    }

    elt.appendChild(container);
    
    return this;
  }
}

//register view component
window.SupportedCells['mermaid'] = {
  view: MermaidCell
};
```

When a cell is created, `constructor` is called with two arguments
- `parent` object
- `data` is a string with data provided via `callback` in [Evaluation pipeline](#Evaluation%20pipeline) section

There is also a DOM element in `parent.element`, that you need to populate with a new data. 

:::note
If you are using external JS modules, do not forget to bundle your code using
```bash
npm run build
```

that will create a `kernel.js` file in `dist` folder of your plugin, which you need to load using the parameter in `package.json`

```js
"jsmodule": "dist/kernel.js"
```
:::

## Misc
### Styling a cell label
Each time you type something in the first line like

```mathematica
.mermaid
```

it assigns the CSS class to it, that you can use. For example

**style.css**
```css
.cell-type-mermaid {
	background-color: hsl(274, 100%, 79%);
	color: rgba(17, 15, 16, 0.5);
}
```

which in included in `"styles": "src/style.css"`.