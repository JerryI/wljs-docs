---
env:
  - Wolfram Kernel
package: wljs-editor
source: https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl
context: Notebook`CellOperations`
---
represents notebook object for a evaluation Kernel

```mathematica
RemoteNotebook[uid_String] _RemoteNotebook
```


## Methods

### `EventHandler`

Allows subscribe to events of the notebook

```mathematica
EventHandler[EvaluationNotebook[], {"OnClose" -> Function[Null,
	Beep[]
]}]
```

It will beep, once you closed a notebook

### `EventClone`
returns [`EventObject`](frontend/Reference/Misc/Events.md#`EventObject`) cloned from the notebook

