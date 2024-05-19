---
env:
  - WLJS
package: wljs-editor
source: https://github.com/JerryI/wljs-editor/blob/dev/src/boxes.js
---

A low-level primitive produced by [Pane](frontend/Reference/Decorations/Pane.md). It can be used in [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) directly to decorate symbols acting as a padded container with a defined width and height

```mathematica
PaneBox[boxes_, opts___]
```

## Options
### `"ImageSize"`
Specifies the dimensions of a box

