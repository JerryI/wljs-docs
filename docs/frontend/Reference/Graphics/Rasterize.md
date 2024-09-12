---
env:
  - Wolfram Kernel
---
```mathematica
Rasterize[expression_, opts___]
```

rasterizes an expression into an [Image](frontend/Reference/Graphics/Image.md) using frontend as it is rendered in a cell.

:::caution
Requires Desktop App (no browser / remote mode) for rasterizing. It literally takes a screenshot of a specific area on a virtual "canvas"
:::

## Options
### `"Window"`
By the default it uses [CurrentWindow](frontend/Reference/Frontend%20IO/CurrentWindow.md). 

## Application
Can be used to export graphics to raster format