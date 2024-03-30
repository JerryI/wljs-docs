---
env:
  - WLJS
  - Wolfram Kernel
package: wljs-graphics3d-threejs
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
update: false
---
a 3D version of [Polygon](frontend/Reference/Graphics/Polygon.md) used in [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md)

```mathematica
Polygon[vertices_List | {vertices__List} | faces_List]
```

represents a single or a list of polygons

## Types
### Triangle
The most efficient one. It consists of 3 vertices

```mathematica
pol = Polygon[{{1, 0, 0}, {1, 1, 1}, {0, 0, 1}}];
pol // Graphics3D
```

<Wl data={`WyJHcmFwaGljczNEIixbIlBvbHlnb24iLFsiTGlzdCIsWyJMaXN0IiwxLDAsMF0sWyJMaXN0Iiwx
LDEsMV0sWyJMaXN0IiwwLDAsMV1dXV0=
`}>{`Graphics3D[Polygon[{{1, 0, 0}, {1, 1, 1}, {0, 0, 1}}]]`}</Wl>

### Quad
4 vertices. It will be converted to the set of triangles on output

### Pentagon
5 vertices. It will be converted to the set of triangles on output

## Parameters
### `RGBColor`
### `Opacity`


## Faces
The most efficient way of using [Polygon](frontend/Reference/Graphics3D/Polygon.md) for constructing complex objects is to wrap it into [GraphicsComplex](frontend/Reference/Graphics3D/GraphicsComplex.md). It provides the list of faces and colors of each vertex as  separate lists, while `Polygon` contains only the indexes, which forms each polygon


```mathematica
v = PolyhedronData["Dodecahedron", "Vertices"] // N;
i = PolyhedronData["Dodecahedron", "FaceIndices"];

GraphicsComplex[v, Polygon[i]] // Graphics3D 
```

<Wl data={`WyJHcmFwaGljczNEIixbIkdyYXBoaWNzQ29tcGxleCIsWyJMaXN0IixbIkxpc3QiLC0xLjM3NjM4
MTkyMDQ3MTE3MzYsMC4wLDAuMjYyODY1NTU2MDU5NTY2OF0sWyJMaXN0IiwxLjM3NjM4MTkyMDQ3
MTE3MzYsMC4wLC0wLjI2Mjg2NTU1NjA1OTU2NjhdLFsiTGlzdCIsLTAuNDI1MzI1NDA0MTc2MDIs
LTEuMzA5MDE2OTk0Mzc0OTQ3NSwwLjI2Mjg2NTU1NjA1OTU2NjhdLFsiTGlzdCIsLTAuNDI1MzI1
NDA0MTc2MDIsMS4zMDkwMTY5OTQzNzQ5NDc1LDAuMjYyODY1NTU2MDU5NTY2OF0sWyJMaXN0Iiwx
LjExMzUxNjM2NDQxMTYwNjYsLTAuODA5MDE2OTk0Mzc0OTQ3NSwwLjI2Mjg2NTU1NjA1OTU2Njhd
LFsiTGlzdCIsMS4xMTM1MTYzNjQ0MTE2MDY2LDAuODA5MDE2OTk0Mzc0OTQ3NSwwLjI2Mjg2NTU1
NjA1OTU2NjhdLFsiTGlzdCIsLTAuMjYyODY1NTU2MDU5NTY2OCwtMC44MDkwMTY5OTQzNzQ5NDc1
LDEuMTEzNTE2MzY0NDExNjA2Nl0sWyJMaXN0IiwtMC4yNjI4NjU1NTYwNTk1NjY4LDAuODA5MDE2
OTk0Mzc0OTQ3NSwxLjExMzUxNjM2NDQxMTYwNjZdLFsiTGlzdCIsLTAuNjg4MTkwOTYwMjM1NTg2
OCwtMC41LC0xLjExMzUxNjM2NDQxMTYwNjZdLFsiTGlzdCIsLTAuNjg4MTkwOTYwMjM1NTg2OCww
LjUsLTEuMTEzNTE2MzY0NDExNjA2Nl0sWyJMaXN0IiwwLjY4ODE5MDk2MDIzNTU4NjgsLTAuNSwx
LjExMzUxNjM2NDQxMTYwNjZdLFsiTGlzdCIsMC42ODgxOTA5NjAyMzU1ODY4LDAuNSwxLjExMzUx
NjM2NDQxMTYwNjZdLFsiTGlzdCIsMC44NTA2NTA4MDgzNTIwNCwwLjAsLTEuMTEzNTE2MzY0NDEx
NjA2Nl0sWyJMaXN0IiwtMS4xMTM1MTYzNjQ0MTE2MDY2LC0wLjgwOTAxNjk5NDM3NDk0NzUsLTAu
MjYyODY1NTU2MDU5NTY2OF0sWyJMaXN0IiwtMS4xMTM1MTYzNjQ0MTE2MDY2LDAuODA5MDE2OTk0
Mzc0OTQ3NSwtMC4yNjI4NjU1NTYwNTk1NjY4XSxbIkxpc3QiLC0wLjg1MDY1MDgwODM1MjA0LDAu
MCwxLjExMzUxNjM2NDQxMTYwNjZdLFsiTGlzdCIsMC4yNjI4NjU1NTYwNTk1NjY4LC0wLjgwOTAx
Njk5NDM3NDk0NzUsLTEuMTEzNTE2MzY0NDExNjA2Nl0sWyJMaXN0IiwwLjI2Mjg2NTU1NjA1OTU2
NjgsMC44MDkwMTY5OTQzNzQ5NDc1LC0xLjExMzUxNjM2NDQxMTYwNjZdLFsiTGlzdCIsMC40MjUz
MjU0MDQxNzYwMTk5NCwtMS4zMDkwMTY5OTQzNzQ5NDc1LC0wLjI2Mjg2NTU1NjA1OTU2NjhdLFsi
TGlzdCIsMC40MjUzMjU0MDQxNzYwMTk5NCwxLjMwOTAxNjk5NDM3NDk0NzUsLTAuMjYyODY1NTU2
MDU5NTY2OF1dLFsiTGlzdCIsWyJQb2x5Z29uIixbIkxpc3QiLFsiTGlzdCIsMTUsMTAsOSwxNCwx
XSxbIkxpc3QiLDIsNiwxMiwxMSw1XSxbIkxpc3QiLDUsMTEsNywzLDE5XSxbIkxpc3QiLDExLDEy
LDgsMTYsN10sWyJMaXN0IiwxMiw2LDIwLDQsOF0sWyJMaXN0Iiw2LDIsMTMsMTgsMjBdLFsiTGlz
dCIsMiw1LDE5LDE3LDEzXSxbIkxpc3QiLDQsMjAsMTgsMTAsMTVdLFsiTGlzdCIsMTgsMTMsMTcs
OSwxMF0sWyJMaXN0IiwxNywxOSwzLDE0LDldLFsiTGlzdCIsMyw3LDE2LDEsMTRdLFsiTGlzdCIs
MTYsOCw0LDE1LDFdXV1dXV0=
`}>{`v = PolyhedronData["Dodecahedron", "Vertices"] // N; i = PolyhedronData["Dodecahedron", "FaceIndices"]; GraphicsComplex[v, {Polygon[i]}] // Graphics3D `}</Wl>

## Dynamic updates
It is possible only using [GraphicsComplex](frontend/Reference/Graphics3D/GraphicsComplex.md) and keeping faces unchanged. 

