---
env:
  - Wolfram Kernel
context: Notebook`Editor`Kernel`FrontSubmitService`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl
package: wljs-editor
---
Sends an expression to be executed on WLJS Interpreter (frontend / browser)

```mathematica
FrontSubmit[expr_, opts___]
```

## Options
### `"Window"`
specifies a window socket, to which an expression will be sent. Use [CurrentWindow](CurrentWindow.md) to fetch a window object from the evaluation context.

## Usage with Meta-Markers
Using an extension [MetaMarker](MetaMarker.md), one can execute an expression in the context of a specified container

```mathematica
FrontSubmit[expr_, m_MetaMarker, opts___]
```

:::warning
Be aware of a context loss in a case of an handler function called from outside the cell. Therefore `"Window"` option comes to provide the missing information about a window.

```mathematica
With[{win = CurrentWindow[]},
	(* normal evaluation context *)
	
	EventHandler[InputButton[], Function[Null,
		(* NO evaluation context *)
		
		FrontSubmit[Alert["Hello World"], "Window" -> win]
										(* provided explicitly *)
	]]
]
```


or another example with a timer [`SetTimeout`](../Misc/Async.md#`SetTimeout`)

```mathematica
With[{win = CurrentWindow[]},
	(* normal evaluation context *)
	
	SetTimeout[
		(* NO evaluation context *)
		FrontSubmit[Alert["Boom"], "Window"->win]
	, 3000];
	
	"Hi there!"
]
```

:::

## Examples
### Calling an WLJS (or Frontend) function

```mathematica
FrontSubmit[Alert["Hello World!"]]
```

which will produce a pop-up modal window.

Or to call a custom-defined Javascript function

```js title="cell 1"
core.ShowReversed = async (args, env) => {
	const text = await interpretate(args[0], env);
	alert(text..split("").reverse().join(""));
}
```

```mathematica title="cell 2"
FrontSubmit[ShowReversed["Must be reversed..."]];
```

### Controlling ViewBox
A typical graphics figure is usually a [ViewBox](../Decorations/ViewBox.md). Here we mark its instance with a unique ID using [MetaMarker](MetaMarker.md)

```mathematica
Plot[x, {x,0,1}, Epilog->{MetaMarker["pp"]}]
```

and then we can destroy it and replace with some other text

```mathematica
FrontSubmit[ViewBox`OuterExpression["Hello World"], MetaMarker["pp"]] 
```

### Append objects to a static graph
We can append anything to a graphics canvas without reevaluation of a cell

```mathematica title="cell 1"
Plot[x, {x,0,1}, Epilog->{MetaMarker["pp"]}]
```

and then

```mathematica title="cell 2"
FrontSubmit[Arrow[RandomReal[{0,1}, {2,2}]], MetaMarker["pp"]]
```

to append an arrow to a marked graph

![](../../../imgs/Screenshot%202024-03-21%20at%2016.57.20.png)

