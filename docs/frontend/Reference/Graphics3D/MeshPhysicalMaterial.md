---
env:
  - WLJS
package: wljs-graphics3d-threejs
context: JerryI`Notebook`Graphics3DUtils`
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
---
```mathematica
MeshPhysicalMaterial[]
```

a default material used in [MeshMaterial](MeshMaterial.md). The most accurate material, that can be parameterized with

### [Roughness](Roughness.md)
### [Emissive](Emissive.md)

### [Metalness](Metalness.md)

## Example

```mathematica
Graphics3D[{MeshMaterial[MeshPhysicalMaterial[]], Roughness[0], Sphere[], PointLight[Red, {1.5075, 4.1557, 2.6129}, 50],  PointLight[Cyan, {-2.268, -2.144, 3.1635}, 50]}, "Lighting"->None]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWVzaE1hdGVyaWFsIixbIk1lc2hQaHlzaWNhbE1hdGVy
aWFsIl1dLFsiUm91Z2huZXNzIiwwXSxbIlNwaGVyZSIsWyJMaXN0IiwwLDAsMF1dLFsiUG9pbnRM
aWdodCIsWyJSR0JDb2xvciIsMSwwLDBdLFsiTGlzdCIsMS41MDc1LDQuMTU1NywyLjYxMjldLDUw
XSxbIlBvaW50TGlnaHQiLFsiUkdCQ29sb3IiLDAsMSwxXSxbIkxpc3QiLC0yLjI2OCwtMi4xNDQs
My4xNjM1XSw1MF1dLFsiUnVsZSIsIidMaWdodGluZyciLCJOb25lIl1d
`}>{`Graphics3D[{MeshMaterial[MeshPhysicalMaterial[]], Roughness[0], Sphere[], PointLight[Red, {1.5075, 4.1557, 2.6129}, 50],  PointLight[Cyan, {-2.268, -2.144, 3.1635}, 50]}, "Lighting"->None]`}</Wl>