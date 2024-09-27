---
env:
  - WLJS
  - Wolfram Kernel
package: wljs-editor
source: https://github.com/JerryI/wljs-editor/blob/dev/src/Boxes.wl
update: false
---
```mathematica
Dataset[list_List | a_Association]
```

represents a structured dataset based on a hierarchy of lists and associations.

:::warning
To be written. See original [doc](https://reference.wolfram.com/language/ref/Dataset.html)
:::

## Optimizations
Use numerical data or `DateObject` or boolean type for an entire column to get better performance.

## Supported output forms
- [StandardForm](frontend/Reference/Decorations/StandardForm.md)
- [WLXForm](frontend/Reference/Decorations/WLXForm.md)

## Notes
It supports lazy loading for a large set with many rows. The data is stored partially on Kernel if it exceeds 0.5 mB.

The data is saved, when exported using [Static HTML](frontend/Exporting/Static%20HTML.md)