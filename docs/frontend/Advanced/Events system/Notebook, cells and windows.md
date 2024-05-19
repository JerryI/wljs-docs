Cells and notebook objects can also emit events and there is no need in cloning event objects to assign multiple handlers (it is done automatically once an `EventHandler` method is applied).

## Notebook
To get the current notebook object [RemoteNotebook](frontend/Reference/Cells%20and%20Notebook/RemoteNotebook.md) from the current context - use [EvaluationNotebook](frontend/Reference/Cells%20and%20Notebook/EvaluationNotebook.md). There are many patterns available to subscribe

- `"OnClose"`
- `"OnBeforeSave"`
- `"OnBeforeLoad"`
- `"OnWebSocketConnected"`
- `"AfterWebSocketConnected"`
- `"CellError"`
- ... many more internal events

most of them used in plugins and extensions. So far the most practical use cases comes to only first one

```mathematica
EventHandler[EvaluationNotebook[], {
	"OnClose" -> Function[Null,
		SetTimeout[Beep[], 1500];
		(* beep after closing *)
	]
}];
```

It can be used to clean up handlers, listeners or to stop tasks, once a notebook has been closed.

:::tip
To clean up handlers one can explicitly clone it beforehand

```mathematica
With[{cloned = EventClone[EvaluationNotebook[]]},
	EventHandler[cloned, {
		"OnClose" -> Function[Null,
			SetTimeout[Beep[], 1500];
			(* beep after closing *)

			Delete[cloned];
		]
	}]
];
```

and then apply `EventRemove`, otherwise it will fire every time you close a notebook. 
:::

## Cells
There are following functions are available to extract cell objects [RemoteCellObj](frontend/Reference/Cells%20and%20Notebook/RemoteCellObj.md) from the evaluation context

- [EvaluationCell](frontend/Reference/Cells%20and%20Notebook/EvaluationCell.md) an input cell (where the code is written)
- [ResultCell](frontend/Reference/Cells%20and%20Notebook/ResultCell.md) an output cell (even if it does not exists yet)

There are following patterns available to attach handlers

 - `"Destroy"`
 - `"State"`
 - `"Error"`

The most practical one is the first one

```mathematica
With[{},
  EventHandler[ResultCell[], {"Destroy" -> (Print["Destroyed!"] &)}];
  "Lovely day"
]
```
*try to reevaluate it multiple times*

It can be used to unsubscribe from listeners, stop tasks once a cell has been reevaluated or destroyed. 

:::info
Cell events are supported for all types of cells including [WLX](frontend/Cell%20types/WLX.md), [Slides](frontend/Cell%20types/Slides.md), and etc.
:::

:::info
Cell events are working as well for __projected outputs to new windows__
:::


## Window
A [WindowObj](frontend/Reference/Frontend%20IO/WindowObj.md) represents a current window, where the notebook is running. Usually it is used in [FrontFetch](frontend/Reference/Frontend%20IO/FrontFetch.md), [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md), however it also supports a few patterns for handlers

- `"keydown"`
- `"capturekeydown"`

:::warning
Those events are captured globally on the given window. It means, you have to explicitly remove event listener from there or refresh the window if you do not need to track keys anymore. 

`"capturekeydown"` will block most keys. Capture `Escape` code for example to make sure that user can have control back if needed.
:::

For example

```mathematica
ev = EventHandler[CurrentWindow[], {
	"keydown" -> Function[key,
		If[key === "Escape", EventRemove[ev]];
		Print[key];
	]
}];
```

