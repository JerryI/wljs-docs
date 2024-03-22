---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
draws a circle with a given radius `r`

```mathematica
Circle[{x_,y_}, r_]
```

for example

```mathematica
Graphics[Table[Circle[RandomReal[{-1,1}, 2], 1], {i,10}]]
```

<Wl>{`Graphics[Table[Circle[RandomReal[{-1,1}, 2], 1], {i,10}]]`}</Wl>

## Parameters
See [Disk](Disk.md)

## Dynamics
Fully support for a radius and coordinates. Use [Offload](../../Dynamics/Offload.md)
