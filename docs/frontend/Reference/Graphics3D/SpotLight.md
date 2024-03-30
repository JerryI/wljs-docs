---
env:
  - WLJS
virtual: true
update: true
origin: https://github.com/JerryI/wljs-graphics-d3/
---
```mathematica
SpotLight[color_RGBColor, position_:{10,100,10} | {position_, target_}, angle_:Pi/3, intensity_:100, distance_:0, penumbra_:0, decay_:2]
```

places a fake source of spot light in a 3D scene (see [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md)). The default `target` is $\{0,0,0\}$. 

```mathematica
Graphics3D[{Shadows[True], Polygon[ {{-5,5,-1}, {5,5,-1}, {5,-5,-1}, {-5,-5,-1}}], White, Cuboid[{-1,-1,-1}, {1,1,1}], Shadows[False], PointLight[Red, {1.5075, 4.1557, 2.6129}, 100], Shadows[True], SpotLight[Cyan, {-2.268, -2.144, 3.1635}]}, "Lighting"->None]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiU2hhZG93cyIsdHJ1ZV0sWyJQb2x5Z29uIixbIkxpc3Qi
LFsiTGlzdCIsLTUsNSwtMV0sWyJMaXN0Iiw1LDUsLTFdLFsiTGlzdCIsNSwtNSwtMV0sWyJMaXN0
IiwtNSwtNSwtMV1dXSxbIkdyYXlMZXZlbCIsMV0sWyJDdWJvaWQiLFsiTGlzdCIsLTEsLTEsLTFd
LFsiTGlzdCIsMSwxLDFdXSxbIlNoYWRvd3MiLGZhbHNlXSxbIlBvaW50TGlnaHQiLFsiUkdCQ29s
b3IiLDEsMCwwXSxbIkxpc3QiLDEuNTA3NSw0LjE1NTcsMi42MTI5XSwxMDBdLFsiU2hhZG93cyIs
dHJ1ZV0sWyJTcG90TGlnaHQiLFsiUkdCQ29sb3IiLDAsMSwxXSxbIkxpc3QiLC0yLjI2OCwtMi4x
NDQsMy4xNjM1XV1dLFsiUnVsZSIsIidMaWdodGluZyciLCJOb25lIl1d
`}>{`
Graphics3D[{Shadows[True], Polygon[ {{-5,5,-1}, {5,5,-1}, {5,-5,-1}, {-5,-5,-1}}], White, Cuboid[{-1,-1,-1}, {1,1,1}], Shadows[False], PointLight[Red, {1.5075, 4.1557, 2.6129}, 100], Shadows[True], SpotLight[Cyan, {-2.268, -2.144, 3.1635}]}, "Lighting"->None]`}</Wl>

For the best effect, use [Shadows](frontend/Reference/Graphics3D/Shadows.md) set to `True` 


## Dynamics
`position` and `target` do support dynamic updates

```mathematica
pos = {0,0,2};
handler = Function[data, pos = data["position"]];

KnotData[{"TorusKnot", {3, 5}}][[1]];
Graphics3D[{ Shadows[True],
  %, 
  EventHandler[Sphere[pos, 0.1], {"transform" -> handler}], 
  SpotLight[White, {Offload[pos], {0,0,0}}],
  Polygon[5{{-1,1,-1}, {1,1,-1}, {1,-1,-1}, {-1,-1,-1}}]
}, "Lighting"->None, ImageSize->600]
```

![](../../../imgs/neattt.png)

