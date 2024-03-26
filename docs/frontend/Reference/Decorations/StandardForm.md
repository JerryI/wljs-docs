---
env:
  - Wolfram Kernel
package: wljs-editor
context: Notebook`Editor`StandardForm`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/StandardForm.wl
---
converts an expression to a standard representation form applying `ToBoxes` and merging expressions to an output string

```mathematica
ToString[expr_, StandardFrom] _String
```

__This is a default representation__ used in output cells. You can apply it to expressions before using in [EditorView](../GUI/EditorView.md) and [InputEditor](../GUI/InputEditor.md) and [CellPrint](../Cells%20and%20Notebook/CellPrint.md).

