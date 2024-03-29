---
env:
  - WLJS
package: wljs-graphics3d-threejs
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
context: JerryI`Notebook`Graphics3DUtils`
---
specifies weather the material emits light

```mathematica
Emissive[color_RGBColor, intensity_:10]
```

example

```mathematica
Graphics3D[{
    {Emissive[Red], Sphere[{0,0,2}]}, 
    {White, Sphere[]}
}]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTGlzdCIsWyJFbWlzc2l2ZSIsWyJSR0JDb2xvciIsMSww
LDBdXSxbIlNwaGVyZSIsWyJMaXN0IiwwLDAsMl1dXSxbIkxpc3QiLFsiR3JheUxldmVsIiwxXSxb
IlNwaGVyZSIsWyJMaXN0IiwwLDAsMF1dXV1d
`}>{`Graphics3D[{{Emissive[Red], Sphere[{0,0,2}]}, {White, Sphere[]}}]`}</Wl>

:::tip
The best looking results can be achieved in a **Path-tracing mode** of [Graphics3D](Graphics3D.md). Emissive materials cannot cast light to other objects in a normal rasterization mode, use artificial light sources such as [SpotLight](SpotLight.md) and [PointLight](PointLight.md)...
:::