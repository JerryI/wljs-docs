---
env:
  - Wolfram Kernel
package: wljs-editor
context: Notebook`CellOperations`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl
---
returns an future output cell identifier as an [RemoteCellObj](RemoteCellObj.md) *even if it was not yet created* from the evaluation context

```mathematica
ResultCell[] _RemoteCellObj
```

