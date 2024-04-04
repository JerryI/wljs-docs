---
env:
  - Wolfram Kernel
update: 
origin: https://github.com/JerryI/wljs-editor/tree/main
needsContainer:
---


Styling box used as a decoration for an arbitrary Wolfram Expressions

```mathematica
Style[expr_, opts__]
```

:::info
Expressions are editable
:::

## Any expressions
The argument `opts` contains directives for the formatted output. The following options are supported
- `Background->RGBColor[...]` adds background to the wrapped expression

:::warning
Styling options are currently quite limited
:::

## String
For string there are much more options available

### Options
- `Background`
- `FontFamily`
- `FontSize`

### Directives
- `_Integer` font size
- `_RGBColor` font color
- `Bold`
- `Italic`


## Example

```mathematica
Style[1, Background->Yellow]
```

![](./../../../Screenshot%202024-03-27%20at%2021.18.47.png)

For pure string options are much richer

```mathematica
Style["ddd", Background->LightBlue, FontFamily->"Monospace", Bold, Red, Italic,  20]
```

![](./../../../Screenshot%202024-04-03%20at%2020.45.35.png)



Hamlet's soliloquy, with repeated words successively has more contrast background

```mathematica
Take[With[{data = ExampleData[{"Text", "ToBeOrNotToBe"}, "Words"]}, 
   MapIndexed[Style[#, Background->RGBColor[1 - 2 Count[Take[data, First[#2]], #]/25, 1,1]] &, data]], 40]
```

![](./../../../Screenshot%202024-04-04%20at%2022.31.03.png)
