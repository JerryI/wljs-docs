---
env:
  - WLJS
internal: true
context: Notebook`Editor`FrontendObject`
package: wljs-editor
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontendObject.wl
---
```mathematica
FrontEndExecutable[uid_String]
```

A reference to a frontend object (see [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md)) similar to [FrontEndRef](frontend/Reference/Frontend%20Objects/FrontEndRef.md), which is replaced on the output by a decorative widget - [ViewBox](frontend/Reference/Decorations/ViewBox.md) with [FrontEndRef](frontend/Reference/Frontend%20Objects/FrontEndRef.md) as an inner expression

