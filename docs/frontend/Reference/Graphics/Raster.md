---
env:
  - WLJS
package: wljs-graphics-d3
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
:::warning
Is not fully supported. *Fallback to SVG rectangles*
:::

```mathematica
Graphics[{Pink, Disk[{100, 100}, 40], 
  Raster[RandomReal[1, {200, 200, 4}]]}]
```

<Wl>{`Graphics[{Pink, Disk[{100, 100}, 40], Raster[RandomReal[1, {200, 200, 4}]]}]`}</Wl>

