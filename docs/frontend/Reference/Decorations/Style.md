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

The argument `opts` contains directives for the formatted output. The following options are supported
- `Background->RGBColor[...]` adds background to the wrapped expression

:::warning
Styling options are currently quite limited
:::
## Example

```mathematica
Style[1, Background->Yellow]
```

![](./../../../Screenshot%202024-03-27%20at%2021.18.47.png)

Hamlet's soliloquy, with repeated words successively has more contrast background

```mathematica
Take[With[{data = ExampleData[{"Text", "ToBeOrNotToBe"}, "Words"]}, 
   MapIndexed[Style[#, Background->RGBColor[1 - 2 Count[Take[data, First[#2]], #]/25, 1,1]] &, data]], 50]
```

![](../../../Screenshot%202024-03-29%20at%2020.22.02.png)