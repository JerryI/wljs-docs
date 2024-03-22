---
env:
  - Wolfram Kernel
context: Notebook`CellOperations`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl
package: wljs-editor
---
Creates a new cell with a given content in a notebook

```mathematica
CellPrint[str_String, opts___] _RemoteCellObj
```

where `str` is a text representation of an expression to be inserted into a new cell. 

## Options
By the default it prints an output Wolfram Language cell after a current parent input cell, but you can override it

### `"After"`
Specifies a [RemoteCellObj](RemoteCellObj.md) after which a new cell will be inserted. A sequence patterns are also supported

### `"Before"`
The same as the previous one, but inserts before the given object

### `"Type"`
The default value is `"Output"`

## Example
Print a cell after the current one with a date

```mathematica
With[{cell = ResultCell[]},
  EventHandler[InputButton[], Function[Null,
    CellPrint[ToString[Now, StandardForm], "After"->cell]
  ]]
]
```