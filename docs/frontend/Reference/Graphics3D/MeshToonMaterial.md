---
env:
  - WLJS
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
package: wljs-graphics3d-threejs
context: JerryI`Notebook`Graphics3DUtils`
---
```mathematica
MeshToonMaterial[]
```

uses lighting model for [MeshMaterial](frontend/Reference/Graphics3D/MeshMaterial.md) to emulate cell-shading effect

```mathematica
Graphics3D[{MeshMaterial[MeshToonMaterial[]], Roughness[0], Sphere[], PointLight[Red, {1.5075, 4.1557, 2.6129}, 50],  PointLight[Cyan, {-2.268, -2.144, 3.1635}, 50]}, "Lighting"->None]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWVzaE1hdGVyaWFsIixbIk1lc2hUb29uTWF0ZXJpYWwi
XV0sWyJSb3VnaG5lc3MiLDBdLFsiU3BoZXJlIixbIkxpc3QiLDAsMCwwXV0sWyJQb2ludExpZ2h0
IixbIlJHQkNvbG9yIiwxLDAsMF0sWyJMaXN0IiwxLjUwNzUsNC4xNTU3LDIuNjEyOV0sNTBdLFsi
UG9pbnRMaWdodCIsWyJSR0JDb2xvciIsMCwxLDFdLFsiTGlzdCIsLTIuMjY4LC0yLjE0NCwzLjE2
MzVdLDUwXV0sWyJSdWxlIiwiJ0xpZ2h0aW5nJyIsIk5vbmUiXV0=
`}>{`Graphics3D[{MeshMaterial[MeshToonMaterial[]], Roughness[0], Sphere[], PointLight[Red, {1.5075, 4.1557, 2.6129}, 50],  PointLight[Cyan, {-2.268, -2.144, 3.1635}, 50]}, "Lighting"->None]`}</Wl>

:::tip
An effect comes better when used together with [SpotLight](frontend/Reference/Graphics3D/SpotLight.md) and minimal ambient lighting
:::

