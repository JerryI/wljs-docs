---
env:
  - WLJS
package: wljs-graphics3d-threejs
context: JerryI`Notebook`Graphics3DUtils`
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/Kernel.wl
---
```mathematica
Shadows[True | False]
```

a scoped parameter like [RGBColor](RGBColor.md) or [Opacity](Opacity.md), that determines if a light source can cast shadows or a primitive can receive shadows as well.

See 

```mathematica
Graphics3D[{Shadows[shadow],  ExampleData[{"Geometry3D","StanfordBunny"}][[1]], SpotLight[White, {{0., -0.4473, 0.4291}, {0,0,0}}, Pi/4, 1], Polygon[ 0.01{{-20,20,-1}, {20,20,-1}, {20,-20,-1}, {-20,-20,-1}}]}, "Lighting"->None] /. {{shadow -> True}, {shadow -> False}}
```

![](../../../imgs/shadows.png)

![](../../../imgs/nosh.png)