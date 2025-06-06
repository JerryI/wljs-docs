---
env:
  - Wolfram Kernel

source: https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl
package: wljs-editor
---
Creates a new cell with a given content in a notebook

```mathematica
CellPrint[str_String, opts___] _RemoteCellObj
```

```mathematica
CellPrint[any_, opts___] _RemoteCellObj
```

where `str` is a text representation of an expression to be inserted into a new cell or `any` is an arbitrary expression, which will be converted to string automatically using [StandardForm](frontend/Reference/Formatting/StandardForm.md).

See also [RemoteCellObj](frontend/Reference/Cells%20and%20Notebook/RemoteCellObj.md) for methods

## Options
By the default it prints an output Wolfram Language cell after a current parent input cell, but you can override it

### `"After"`
Specifies a [RemoteCellObj](frontend/Reference/Cells%20and%20Notebook/RemoteCellObj.md) after which a new cell will be inserted. A sequence patterns are also supported

### `"Type"`
The default value is `"Output"`

### `"Target"`
Default is `"Notebook"`. Specifies the target, where a cell will be printed. Possible values

- `"Notebook"` or `Automatic` or `Null`
- `"Window"` or `_` projects to a new window (projected cells can emit more events, see [RemoteCellObj](frontend/Reference/Cells%20and%20Notebook/RemoteCellObj.md))


### `"Display"`
Default is `"codemirror"`. This sets what renderer will be used, the following renders are available 

- `"codemirror"` default render for all input cells and output WL cells
- `"markdown"` 
- `"wlx"`
- `"html"
- `"js"

and etc depending on the cell types available on your system (see [Cell types](Cell%20types))

### `"EvaluatedQ"`
Sets if the evaluation required. By the default is `True` (no evaluation, display as provided)

### `"Notebook"`
In a case if the evaluation context (if `After` is not provided and it is called by a button other async event) is not available, you should provide a reference to the notebook (see [EvaluationNotebook](frontend/Reference/Cells%20and%20Notebook/EvaluationNotebook.md))

### `ImageSize`
A preferred window size for printed cells when `Target` is `_` (new window).

## Examples

### Basic
Print a cell after the current one with a date

```mathematica
With[{cell = ResultCell[]},
  EventHandler[InputButton[], Function[Null,
    CellPrint[ToString[Now, StandardForm], "After"->cell]
  ]]
]
```

or print to a new window

```mathematica
cell = CellPrint[ToString[Plot[x,{x,0,1}], StandardForm], "Target"->_];
```

and then delete it

```mathematica
Delete[cell];
```


### Different renders
One can use [WLX](frontend/Cell%20types/WLX.md) as well. For example you create a template in a separate cell

```jsx
.wlx

wlTest[P_] := <div class="p-1 rounded" style="border: 1px solid blue"><P/></div>
```

Since this function returns a string, we can pass it directly to `CellPrint`

```mathematica
CellPrint[wlTest[Plot[x, {x,0,1}]], "Display"->"wlx"];
```

![](./../../../Screenshot%202024-12-26%20at%2014.24.54.png)

### A window, that opens another window
It is still possible to do if you provide notebook in [Options](#Options), otherwise it does not know where to open it

```mathematica
man := ManipulatePlot[Sin[x w], {x,-1,1}, {w,1,5}];

open[n_] := CellPrint[ToString[man, StandardForm], "Target"->_, "Notebook"->n];

CellPrint[ToString[
	With[{n = EvaluationNotebook[]}, 
		EventHandler[InputButton[], Function[Null, open[n]]]
	]
, StandardForm], "Target"->_]
```

Even if you close your notebook, it will still work.

### Tracking a projected cell
You can assign handlers to the events from the window

```mathematica
state = "";
TextView[state // Offload, "Label"->"State"]

cell = CellPrint[Plot[x,{x,0,1}], "Target"->_];
EventHandler[cell, {
	"Mounted" -> Function[Null, state = "Mounted"],
	"Closed" -> Function[Null, state = "Closed"]
}]
```

:::note
Note that `Mounted` event contains `WindowObj`, which can be used together with `FrontSubmit` and `FrontFetch` to trigger actions there.
:::