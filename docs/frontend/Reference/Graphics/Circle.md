---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
draws a circle with a given radius `r`

```mathematica
Circle[{x_,y_}, r_]
```

for example

```mathematica
Graphics[Table[Circle[RandomReal[{-1,1}, 2], 1], {i,10}]]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkNpcmNsZSIsWyJMaXN0IiwwLjY5NjU0Njc4NTQ3NTIxODgs
LTguMzUxMjU1NzAxODk4MDA4ZS0yXSwxXSxbIkNpcmNsZSIsWyJMaXN0IiwwLjEwMzUyOTAzMDQy
MzY3Nzc4LDAuNTcwNDY1NDczOTI1ODUxOV0sMV0sWyJDaXJjbGUiLFsiTGlzdCIsMC45NjQzNjgz
NDAxNDg5MjI3LDAuNjQxMTcxMjkwMjY2Nzk4MV0sMV0sWyJDaXJjbGUiLFsiTGlzdCIsLTAuMTAx
Nzg2NzI2MDcwMzMwNjgsMC4zMDE5MzYwNTg4NzgyODcxXSwxXSxbIkNpcmNsZSIsWyJMaXN0Iiwt
MC41NzY3OTYwMjI3NjQ3MjA2LDAuNTUxMDI4NTU1MzI5NDY4N10sMV0sWyJDaXJjbGUiLFsiTGlz
dCIsLTAuNzY5NTI0NzEwMjU3ODI2OSwwLjY4MTMzODI4NzA1NzU0NTFdLDFdLFsiQ2lyY2xlIixb
Ikxpc3QiLC0yLjg0NTA0NzE1NTc5Mjk0NThlLTIsMC41OTg2MjA3OTIzNTc1MTczXSwxXSxbIkNp
cmNsZSIsWyJMaXN0IiwtMC40MzA4ODUzMjE4MDk4Njk0LC0wLjg3NjE1NzY5NjI5NzY1MTZdLDFd
LFsiQ2lyY2xlIixbIkxpc3QiLDAuNzYwNDE1NTE0NzU4ODg5OCw1LjI4NDY4NTgxMDc0NTQxNWUt
Ml0sMV0sWyJDaXJjbGUiLFsiTGlzdCIsMC44ODEwOTc2OTYxODIxNDYyLDAuNzQ3MDM2MzAzNTEx
OTEyMV0sMV1dXQ==
`}>{`Graphics[Table[Circle[RandomReal[{-1,1}, 2], 1], {i,10}]]`}</Wl>

## Parameters
See [Disk](Disk.md)

## Dynamics
Fully support for a radius and coordinates. Use [Offload](../Interpreter/Offload.md)
