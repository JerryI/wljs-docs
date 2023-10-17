---
env:
  - Wolfram Kernel
---
```mathematica
Sin[x/2] // ToCM6Boxes
```
acts as an extension to `ToBoxes` and transforms an expression to a sort-of `DisplayForm` with all applicable [Decorations](../../Development/Decorations.md) involved.

Returns a string.

:::danger
Experimental function used mostly internally
:::

## Examples
Consider to use it together with [EditorView](../Input/EditorView.md)

## Dev notes
This is an internal wrapper used to transform the result of evaluation to a string to be displayed in a cell. It relies on Mathematica's `Boxes` expressions. 