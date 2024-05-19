---
env:
  - Wolfram Kernel
context: Notebook`Editor`Kernel`FrontSubmitService`
---
```mathematica
WindowObj[assoc_Association]
```

an internal representation of a current window (can be a notebook or projected cell), that contains the information of a live connection to it used by [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md), [FrontFetch](frontend/Reference/Frontend%20IO/FrontFetch.md), [Slides](frontend/Reference/Slides/Slides.md) and other functions.

Normally is produced by [CurrentWindow](frontend/Reference/Frontend%20IO/CurrentWindow.md).

## Methods
### `EventHandler`
You can attach an event listener to it. The following patterns are supported
- `"keydown"`
- `"capturekeydown"` - blocks normal input while capturing in the entire notebook

It returns [`EventObject`](frontend/Reference/Misc/Events.md#`EventObject`) generated from the window.

*example*
```mathematica
ev = EventHandler[CurrentWindow[], {
	"keydown" -> Function[key,
		If[key === "Escape", EventRemove[ev]];
		Print[key];
	]
}];
```

:::warning
It is only valid for a current window. If you reopened a notebook, one has to reattach an event handler to a new [WindowObj](frontend/Reference/Frontend%20IO/WindowObj.md). 
:::

