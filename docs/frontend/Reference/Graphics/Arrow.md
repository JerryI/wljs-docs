---
env:
  - WLJS
update: true
needsContainer: false
virtual: true
origin: https://github.com/JerryI/wljs-graphics-d3/
draft: false
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
package: wljs-graphics-d3
context: JerryI`Notebook`Graphics2D`
"":
---
Plots an arrow with a fixed head-size from point 1 to point 2

```mathematica
Graphics[{
  Arrow[{{0,0}, {1,1}}]
}]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkFycm93IixbIkxpc3QiLFsiTGlzdCIsMCwwXSxbIkxpc3Qi
LDEsMV1dXV0sWyJSdWxlIiwiSW1hZ2VTaXplIiwzNTBdXQ==
`}>{`Graphics[{Arrow[{{0,0}, {1,1}}]}, ImageSize->350]`}</Wl>

:::warning
Does work only with [Graphics](Graphics.md) (2D). Dynamics is not supported for now
:::

## Dynamics
Fully supports. Use [Offload](../Interpreter/Offload.md) keyword for that

## Options
Not available at the moment

