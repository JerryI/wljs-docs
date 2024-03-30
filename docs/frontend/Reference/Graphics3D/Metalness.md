---
env:
  - WLJS
package: wljs-graphics3d-threejs
context: JerryI`Notebook`Graphics3DUtils`
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
---
specifies metallic property of a graphics primitive (see [MeshPhysicalMaterial](frontend/Reference/Graphics3D/MeshPhysicalMaterial.md))

```mathematica
Metalness[i_Real]
```

where `i` can be between `0` and `1`. In real world it either `1` or `0`.

An effect is more visible, when there is an HDR map is used

__non-metallic__

```mathematica
Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwwXSxbIlNwaGVyZSIsWyJMaXN0Iiww
LDAsMF1dXSxbIlJ1bGUiLCInTGlnaHRpbmcnIiwiTm9uZSJdLFsiUnVsZSIsIidMaWdodG1hcCci
LCInaHR0cHM6XC9cL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cL0plcnJ5SVwvTWF0aGVtYXRp
Y2EtVGhyZWVKUy1ncmFwaGljcy1lbmdpbmVcL21hc3RlclwvYXNzZXRzXC9QdXJlU2t5Lmhkcici
XV0=
`}>{`Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]`}</Wl>

__metallic__

```mathematica
Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwxXSxbIlNwaGVyZSIsWyJMaXN0Iiww
LDAsMF1dXSxbIlJ1bGUiLCInTGlnaHRpbmcnIiwiTm9uZSJdLFsiUnVsZSIsIidMaWdodG1hcCci
LCInaHR0cHM6XC9cL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cL0plcnJ5SVwvTWF0aGVtYXRp
Y2EtVGhyZWVKUy1ncmFwaGljcy1lbmdpbmVcL21hc3RlclwvYXNzZXRzXC9QdXJlU2t5Lmhkcici
XV0=
`}>{`Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]`}</Wl>

__metallic and polished__

```mathematica
Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]
```

<Wl data={`WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwxXSxbIlJvdWdobmVzcyIsMF0sWyJT
cGhlcmUiLFsiTGlzdCIsMCwwLDBdXV0sWyJSdWxlIiwiJ0xpZ2h0aW5nJyIsIk5vbmUiXSxbIlJ1
bGUiLCInTGlnaHRtYXAnIiwiJ2h0dHBzOlwvXC9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXC9K
ZXJyeUlcL01hdGhlbWF0aWNhLVRocmVlSlMtZ3JhcGhpY3MtZW5naW5lXC9tYXN0ZXJcL2Fzc2V0
c1wvUHVyZVNreS5oZHInIl1d
`}>{`Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]`}</Wl>