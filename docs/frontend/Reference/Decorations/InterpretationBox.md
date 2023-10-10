---
env:
  - Wolfram Kernel
update: false
---
:::danger
The concept is the same as in Wolfram Mathematica, however, the execution differs. Please see [Decorations](../../Development/Decorations.md) for more information.   
:::
Make a formatting structure whose interpretation is not based on its appearance

```mathematica
InterpretationBox[display_, expr_]
```

where `display` will be shown in the output cell, instead of `expr`, keeping `expr` for the evaluation. 

:::info
`display` can be any Wolfram Expression
:::

## Applications
One of the examples is to make some definitions shorter by setting `UpValues` to  `MakeBoxes`, since the last one is recursively applied to everything in the output cell 

```mathematica
AVeryLongFunction /: MakeBoxes[AVeryLongFunction, opts___] := InterpretationBox[Ashort, AVeryLongFunction]
```

Now we can check the result by
```mathematica
AVeryLongFunction[123],
```

where one can redefine in advance
```mathematica
AVeryLongFunction[expr__] := SpecialList[expr]
```

## Dev notes
This is a wrapper for [FrontEndView](Internals/FrontEndView.md) with a read-only [EditorView](../Input/EditorView.md) inside.