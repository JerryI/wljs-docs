---
env:
  - WLJS
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/MetaMarkersKernel.wl
package: wljs-editor
context: Notebook`Editor`Kernel`FrontSubmitService`MetaMarkers`
---
```mathematica
MetaMarker[uid_String] _MetaMarker
```

an object used to mark frontend instances or select them and their contexts to be used later with [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md).  One can think about if it assigns a given identifier to a group of expressions and saves their context of the evaluation.

Please, see an examples on [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md).

