---
env:
  - WLJS
source: https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl
package: wljs-inputs
context: Notebook`Kernel`Inputs`
update: false
---
```mathematica
TableView[table_List, opts___]
```

where `table` is a 2D list

Represents a ready-only table preview for a large set of data. For editable tables, please see [InputTable](frontend/Reference/GUI/InputTable.md)

## Options

### `"Height"`
specifies the maximum height in pixels

### `TableHeadings`
accepts a list of headings

## TODO
Developers notes
- [ ] Allows dynamic updates

