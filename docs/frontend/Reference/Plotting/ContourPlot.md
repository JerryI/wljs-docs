---
env:
  - Wolfram Kernel
update: 
needsContainer: 
origin: https://reference.wolfram.com/language/ref/ContourPlot.html?q=ContourPlot
---
Generates a contour plot of $f$ as a function of $x$ and $y$
```mathematica
ContourPlot[Cos[x] + Cos[y], {x, 0, 4 Pi}, {y, 0, 4 Pi}]
```

<Wl>{`ContourPlot[Cos[x] + Cos[y], {x, 0, 4 Pi}, {y, 0, 4 Pi}, ImageSize->350]`}</Wl>

Or plot contour lines for which the equation is satisfied
```mathematica
ContourPlot[x^2 - y^2 == x^3, {x, -2, 2}, {y, -2, 2}]
```

<Wl>{`ContourPlot[x^2 - y^2 == x^3, {x, -2, 2}, {y, -2, 2}, ImageSize->350]`}</Wl>

## Options
Styling is limited to the current implementation of [Graphics](../Graphics/Graphics.md)
