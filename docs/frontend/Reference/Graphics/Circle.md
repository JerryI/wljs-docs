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

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkNpcmNsZSIsWyJMaXN0IiwtMC41NDY2NDE2OTk2NjQyNTgy
LDAuOTIxNjYxNjg4ODY3NDkxOF0sMV0sWyJDaXJjbGUiLFsiTGlzdCIsLTAuNTM5MDg3ODEzMzI2
OTQ3LC03LjE3MDM5ODM3MzQyNTg3OWUtMl0sMV0sWyJDaXJjbGUiLFsiTGlzdCIsLTAuMTE4MTgy
MTk0MzMwOTA2MDQsMC44NTYwMTEzOTY0MTkwNzcyXSwxXSxbIkNpcmNsZSIsWyJMaXN0IiwwLjUx
NzI2OTkzMTU5MTg2MDMsLTAuMzU4MDY1OTc5MzA0NTI3MV0sMV0sWyJDaXJjbGUiLFsiTGlzdCIs
LTAuMzg0NDAyNDk1NTU3NDc3NCw5LjU3MjUzOTY4NzUyMzI5NmUtMl0sMV0sWyJDaXJjbGUiLFsi
TGlzdCIsMC4yNTE1NDg2NTMxMDIxMTExNiwtMC43MTU0MzIxNzA5ODQ0NzEzXSwxXSxbIkNpcmNs
ZSIsWyJMaXN0IiwtOC4yNDMxMTM0Nzk0ODMwNTVlLTIsMC43NDQyNDQ5NzUyMTA4NzE3XSwxXSxb
IkNpcmNsZSIsWyJMaXN0IiwwLjUyODQyNzMzMTIxODQ4OTMsLTAuNzQ5OTQwNDE4MTQyMDg4MV0s
MV0sWyJDaXJjbGUiLFsiTGlzdCIsMS4yNjY4NjM2ODgyMzI2MTEyZS0yLC0wLjk5MjI1NjEzNjA4
NDIwNDZdLDFdLFsiQ2lyY2xlIixbIkxpc3QiLDAuMTIyMDg2NjY3MzM3NTQyMDMsLTAuODU0NDkx
OTA5ODQwNzgxM10sMV1dXQ==
`}>{`Graphics[Table[Circle[RandomReal[{-1,1}, 2], 1], {i,10}]]`}</Wl>

## Parameters
See [Disk](Disk.md)

## Dynamics
Fully support for a radius and coordinates. Use [Offload](../Interpreter/Offload.md)
