---
env:
  - Wolfram Kernel
---
```mathematica
ParentCell[inputCell_CellObj] _CellObj
```

asks master kernel to find an identifier of the parent cell (usually an input cell) of the given output cell.

:::danger
Common pitfall is to use
```mathematica
EvaluationCell[] // ParentCell
```
__will not work__, since `EvaluationCell` refers to the output cell, which is not created yet. Please, use it after an output is already visible.
:::

## Application
To find and remove in input cell of the current cell (aka suicide)

```mathematica
With[{cell = EvaluationCell[]},
  EventHandler[InputButton["Bye"],
    Function[Null,
      cell // ParentCell // Delete;
    ]
  ]
]
```

here we use `With` to capture an id of the output cell, that will be created later.