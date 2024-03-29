---
env:
  - Wolfram Kernel
update: false
---



Make a formatting structure whose interpretation is not based on its appearance

```mathematica
InterpretationBox[display_, expr_]
```

where `display` will be shown in the output cell, instead of `expr`, keeping `expr` for the evaluation. 

:::info
`display` can be any Wolfram Expression wrapped in `MakeBoxes`
:::

:::danger
`display` must be Boxes, if you want to use regular WL expressions, consider [Interpretation](Interpretation.md)
:::

:::tip
Please see [BoxBox](BoxBox.md) and [ViewBox](ViewBox.md) for an advanced expression decorations
:::

## Applications
One of the examples is to make some definitions shorter by setting `UpValues` to  `MakeBoxes`, since the last one is recursively applied to everything in the output cell 

```mathematica
AVeryLongFunction /: MakeBoxes[AVeryLongFunction, StandardForm] := InterpretationBox[MakeBoxes[Ashort, StandardForm], AVeryLongFunction]
```

Now we can check the result by
```mathematica
AVeryLongFunction
```

if one define also this
```mathematica
AVeryLongFunction[expr__] := SpecialList[expr]
```

You can use it with the created alias `Ashort`


## Dev notes
This is a wrapper for [ViewBox](ViewBox.md) with a read-only [EditorView](../GUI/EditorView.md) inside.