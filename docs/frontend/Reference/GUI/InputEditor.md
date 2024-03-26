---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl
package: wljs-editor
context: Notebook`EditorUtils`
---
a wrapper over [EditorView](EditorView.md) used for making input elements

```mathematica
InputEditor[expr_String] _EventObject
```

as a result it returns [`EventObject`](../Misc/Events.md#`EventObject`)

