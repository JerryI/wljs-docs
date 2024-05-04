---
draft: false
env:
  - WLJS
package: wljs-graphics3d-threejs
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
---
```mathematica
Graphics3D[primitives__, opts___]
```

represents 3D graphical image.

Use lines, polygons, cylinders, spheres, etc. to build up a 3D graphics scene

```mathematica
Graphics3D[{Blue, Cylinder[], Red, Sphere[{0, 0, 2}], Black, Thick, 
  Line[{{-2, 0, 2}, {2, 0, 2}, {0, 0, 4}, {-2, 0, 2}}], 
  Yellow, Polygon[{{-3, -3, -2}, {-3, 3, -2}, {3, 
     3, -2}, {3, -3, -2}}], Green, Opacity[.3], 
  Cuboid[{-2, -2, -2}, {2, 2, -1}]}]
```

<Wl >{`Graphics3D[{Blue, Cylinder[], Red, Sphere[{0, 0, 2}], Black, Thick, Line[{{-2, 0, 2}, {2, 0, 2}, {0, 0, 4}, {-2, 0, 2}}], Yellow, Polygon[{{-3, -3, -2}, {-3, 3, -2}, {3, 3, -2}, {3, -3, -2}}], Green, Opacity[.3], Cuboid[{-2, -2, -2}, {2, 2, -1}]}]`}</Wl>

Use plot functions to automatically create [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md) from different types of data

```mathematica
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, ColorFunction -> "Rainbow", Mesh -> None]
```

<Wl >{`Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, ColorFunction -> "Rainbow", Mesh -> None]`}</Wl>

```mathematica
Graphics3D[ Table[With[{p = {i, j, k}/5}, {RGBColor[p], Opacity[.75], Cuboid[p, p + .15]}], {i, 5}, {j, 5}, {k, 5}]]
```

<Wl >{`Graphics3D[ Table[With[{p = {i, j, k}/5}, {RGBColor[p], Opacity[.75], Cuboid[p, p + .15]}], {i, 5}, {j, 5}, {k, 5}]]`}</Wl>

## Options

### `ImageSize`
Accepts `_Integer` or `{width_Integer, height_Interger}`

### `"Lighting"`
Default is `True`. It sets the default ambient lighting

### `ViewProjection`
Sets the default camera for the scene. Default value is `"Orthographic"`
- `"Orthographic"`
- `"Perspective"`


### `"TransitionType"`
Applies interpolation to time-dependent variables used in the scene like moving boxes, changing geometry. By the default it is `None`, a possible values is `"Linear"` 

:::warning
The support of linear interpolation is limited and probably will be removed in the future
:::

### `Boxed`
Draws a wireframe box around the objects in the scene. Default is `False`.

### `BoxRatios`
Sets the 3D aspect ratio of the whole scene. By the default [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md) does not rescale the scene. It accepts `{sx_Real, sy_Real, sz_Real}`, where `sx` are real positive numbers.

### `"Lightmap"`
Sets an URL to an HDR light-map. __Currently only remote sources are supported__.

### `"RTX"`
Realtime path-tracing mode. __Turned off by the default__, i.e. `False`.  It provides more photorealistic images and global illumination. 

:::warning
RTX feature requires a corresponding hardware to handle such heavy computations
:::


## Dynamics
See primitives [Sphere](frontend/Reference/Graphics3D/Sphere.md), [Polygon](frontend/Reference/Graphics3D/Polygon.md) and etc for it 

![](../../../imgs/ScreenRecording2024-03-24at20.50.18-ezgif.com-optipng.png)