---
env:
  - WLJS
package: wljs-graphics3d-threejs
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
context: JerryI`Notebook`Graphics3DUtils`
---
sets roughness for the current material

```mathematica
Roughness[i_Real]
```

where `i` is in the range of `0` and `1`. 

## Examples

__rough material__
```mathematica
Graphics3D[{White, Roughness[1], Sphere[], PointLight[Red, {-1,-3,3}]}]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiR3JheUxldmVsIiwxXSxbIlJvdWdobmVzcyIsMV0sWyJT
cGhlcmUiLFsiTGlzdCIsMCwwLDBdXSxbIlBvaW50TGlnaHQiLFsiUkdCQ29sb3IiLDEsMCwwXSxb
Ikxpc3QiLC0xLC0zLDNdXV1d
`}>{`Graphics3D[{White,Roughness[1], Sphere[], PointLight[Red, {-1,-3,3}]}]`}</Wl>

__polished__
```mathematica
Graphics3D[{White, Roughness[0], Sphere[], PointLight[Red, {-1,-3,3}]}]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiR3JheUxldmVsIiwxXSxbIlJvdWdobmVzcyIsMF0sWyJT
cGhlcmUiLFsiTGlzdCIsMCwwLDBdXSxbIlBvaW50TGlnaHQiLFsiUkdCQ29sb3IiLDEsMCwwXSxb
Ikxpc3QiLC0xLC0zLDNdXV1d
`}>{`Graphics3D[{White, Roughness[0], Sphere[], PointLight[Red, {-1,-3,3}]}]`}</Wl>

