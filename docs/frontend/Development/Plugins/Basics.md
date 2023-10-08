---
draft: false
sidebar_position: 2
---
Each plugin/extension is a folder with an arbitrary structure, but in the root there must be a `package.json` file (borrowed from `npm`) with the following content

```json
{
  "name": "name-of-your-package",
  "version": "0.0.1",
  "description": "description",
  "scripts": {
    "build": "node --max-old-space-size=8192 ./node_modules/.bin/rollup --config rollup.config.mjs"
  },
  "wljs-meta": {
    "styles": "dist/styles.css",
    "jsmodule": "dist/kernel.js",
    "wlkernel": "src/kernel.wln",
    "wl": "src/frontend.wln",
    "autocomplete": "src/autocomplete.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/username/gitrepo"
  },
  "author": "Kirill Vasin",
  "license": "GPL",
  "bugs": {
    "url": "https://github.com/username/gitrepo/issues"
  },
  "homepage": "https://github.com/username/gitrepo#readme",
  "dependencies": {
    "@rollup/plugin-commonjs": "^24.0.1",
    "@rollup/plugin-json": "^6.0.0",
    "@rollup/plugin-node-resolve": "15.0.1",
    "rollup": "^3.20.6",
    "rollup-plugin-combine": "^2.1.1",
    "serve-static": "^1.14.1",
    "systemjs": "^6.14.1"
  }
}
```

The most important field here is `"wljs-meta"`, where one can specify file to load for a kernel, master kernel, javascript files, styles and etc

```js
"wljs-meta": {
    "css": "dist/styles.css", //all styles to be included
    "jsmodule": "dist/kernel.js", //all js modules (cjs)
    "wlkernel": "src/kernel.wln", //to be loaded into secondary kernel
    "wl": "src/frontend.wln", //to be loaded into the master kernel
    "autocomplete": "src/autocomplete.js" //autocomplete desc.
  },
```

There is no any restrictions, one can load anything into the kernel.

:::info
All packages are located in `<installationDirectory>/Packages` directory.
If you are using desktop app, you can locate it using a top-bar menu 
`File` $\rightarrow$ `Locate AppData`
:::

__The template can be forked from [wljs-template](https://github.com/JerryI/wljs-template).__

:::note
GitHub is used as a main source for distributing plugins
:::
## Preparations
Please, make sure, that the package [`wljs-dev-tool`](https://github.com/JerryI/wljs-dev-tools) is installed, that comes very helpful while debugging your extensions.

:::danger
Always save you packages on Github, since each new update of WLJS Frontend purges `Packages` folder or decline the update before you save all changes.
:::

For the most cases you do not even need to create a package while developing an extension, expect the cases when it adds modal windows or new cell types.

:::tip
Initialize Github repo inside `Packages/youpluginname` directory and develop lively from there
:::

:::tip
- __Javascript code__ (`"jsmodule"`) does not require full reload of the frontend. 
	Click `Window`$\rightarrow$ `Force Reload`
- __WL Kernel code__ (`"wlkernel"`)  does require the restart of the secondary kernel
- __WL code__ for the frontend (`"wl"`) does require the restart of the frontend
:::

## Roadmap
Afterwards it does depend what you want to extend, please see the full list of typical cases

- [Library functions](library-functions.md) which extend Wolfram Language
- [New cell types](new-celltypes.md) or editors extensions
- [UI/Theme](Themes.md) modifications


## API functions
This is just a list, please, follow [Roadmap](#Roadmap) section
### *to register any function to be executed on frontend*
```mathematica
JerryI`WolframJSFrontend`Extensions`RegisterFrontEndObject[Symbol_]
```
- must be executed on WL Kernel (not master), i.e. included by `"wlkernel"`
- note: *used for `Graphics` expression*

### *to add autocomplete item to the editor*
```mathematica
JerryI`WolframJSFrontend`Extensions`RegisterAutocomplete[a_Association | _List]
```
- must be executed on a master kernel, i.e. included by `"wl"`

where `a` has the following structure
```mathematica
a = <|
	"label"->"<YourSymbol>",
	"type"-> "keyword",
	"info"-> "<YourDescription>"
	|>
```

### *to add a new section to Settings menu*
```mathematica
JerryI`WolframJSFrontend`Extensions`ExtendSettings[function_, title_String]
```
- must be executed on a master kernel, i.e. included by `"wl"`

where `function` is a pure function with an empty argument or list of pure functions
```mathematica
function = Function[Null, "String"]
function = {Function[Null, "String"], ...}
```
it must return a string, that contains an HTML elements to be inserted into a settings page layout

### *to add new top-bar menu item*
This is applicable only for desktop app version
```mathematica
JerryI`WolframJSFrontend`Extensions`Handlers["Menu"]["<codename>"][assoc_Association] := Module[{},
	Echo["requested recevied!"];
	Echo[assoc]
]
```
- must be executed on a master kernel, i.e. included by `"wl"`

in the `assoc` you have `assoc["Client"]` field that stands for the client's socket, which invoked the request. A request is created when a user presses a button in a menu or uses a shortcut key. It is described using `package.json` field

```json
"wljs-meta": {
   
    "menu": [
      {
        "label": "<LabelName>",
        "accelerator": ["Cmd+<KeyMac>", "Ctrl+<Key>"],
        "internalHandler": "<codename>",
        "spawnWindow": false,
        "type": "button"
      }
    ]
]
```

### *add an cell processor*
an example from the main guide [new-celltypes](new-celltypes.md)
```mathematica
JerryI`WolframJSFrontend`Notebook`NotebookAddEvaluator[(
	MermaidQ ->  <|"SyntaxChecker"->(True&),               
					"Epilog"->(#&),
					"Prolog"->(#&), 
					"Evaluator"->MermaidProcessor  
|>), "HighestPriority"];

```
### *low-level access to Notebook*
Since any request is created by a user, you can always get its socket using global context, i.e

```mathematica
Global`client
```

and every socket is associated with a notebook, so you can get the Notebook data using this trick

```mathematica
JerryI`WolframJSFrontend`Notebook`Notebooks[JerryI`WolframJSFrontend`Notebook`$AssociationSocket[Global`client]]
```
- must be executed on a master kernel, i.e. included by `"wl"`