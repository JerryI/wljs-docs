---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl
package: wljs-editor
context: Notebook`EditorUtils`
---
a wrapper over [EditorView](frontend/Reference/GUI/EditorView.md) used for making input elements

```mathematica
InputEditor[expr_String] _EventObject
```

as a result it returns [`EventObject`](frontend/Reference/Misc/Events.md#`EventObject`)

