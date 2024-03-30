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

A reference to a frontend object (see [CreateFrontEndObject](CreateFrontEndObject.md)) similar to [FrontEndRef](FrontEndRef.md), which is replaced on the output by a decorative widget - [ViewBox](../Decorations/ViewBox.md) with [FrontEndRef](FrontEndRef.md) as an inner expression

