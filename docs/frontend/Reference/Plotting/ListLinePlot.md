---
env:
  - Wolfram Kernel
update: 
needsContainer: 
registered: true
---
Plots a line like [Plot](Plot.md) through the list of points provided
```mathematica
ListLinePlot[{y1, y2, y3, ...}]
```

## Options
The same as for [Plot](Plot.md)

## Examples
Plot a list of $y$ values

```mathematica
ListLinePlot[{1, 1, 2, 3, 5, 8}]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkxpc3QiXSxbIkxpc3QiLFsiTGlzdCIsWyJMaXN0Il0sWyJM
aXN0Il0sWyJMaXN0IixbIkh1ZSIsMC42NywwLjYsMC42XSxbIkRpcmVjdGl2ZSIsWyJQb2ludFNp
emUiLFsiUmF0aW9uYWwiLDcsMzYwXV0sWyJSR0JDb2xvciIsMC4zNjg0MTcsMC41MDY3NzksMC43
MDk3OThdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiTGluZSIsWyJMaXN0IixbIkxpc3Qi
LDEuMCwxLjBdLFsiTGlzdCIsMi4wLDEuMF0sWyJMaXN0IiwzLjAsMi4wXSxbIkxpc3QiLDQuMCwz
LjBdLFsiTGlzdCIsNS4wLDUuMF0sWyJMaXN0Iiw2LjAsOC4wXV1dXV1dLFsiTGlzdCIsWyJMaXN0
Il0sWyJMaXN0Il1dXSxbIkxpc3QiLFsiUnVsZSIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5
Il0sWyJSdWxlIiwiRGlzcGxheUZ1bmN0aW9uIiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJBc3BlY3RS
YXRpbyIsWyJQb3dlciIsIkdvbGRlblJhdGlvIiwtMV1dLFsiUnVsZSIsIkF4ZXMiLFsiTGlzdCIs
dHJ1ZSx0cnVlXV0sWyJSdWxlIiwiQXhlc0xhYmVsIixbIkxpc3QiLCJOb25lIiwiTm9uZSJdXSxb
IlJ1bGUiLCJBeGVzT3JpZ2luIixbIkxpc3QiLDAuMCwwXV0sWyJSdWxlRGVsYXllZCIsIkRpc3Bs
YXlGdW5jdGlvbiIsIklkZW50aXR5Il0sWyJSdWxlIiwiRnJhbWUiLFsiTGlzdCIsWyJMaXN0Iixm
YWxzZSxmYWxzZV0sWyJMaXN0IixmYWxzZSxmYWxzZV1dXSxbIlJ1bGUiLCJGcmFtZUxhYmVsIixb
Ikxpc3QiLFsiTGlzdCIsIk5vbmUiLCJOb25lIl0sWyJMaXN0IiwiTm9uZSIsIk5vbmUiXV1dLFsi
UnVsZSIsIkZyYW1lVGlja3MiLFsiTGlzdCIsWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0b21hdGlj
Il0sWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0b21hdGljIl1dXSxbIlJ1bGUiLCJHcmlkTGluZXMi
LFsiTGlzdCIsIk5vbmUiLCJOb25lIl1dLFsiUnVsZSIsIkdyaWRMaW5lc1N0eWxlIixbIkRpcmVj
dGl2ZSIsWyJHcmF5TGV2ZWwiLDAuNSwwLjRdXV0sWyJSdWxlIiwiSW1hZ2VTaXplIiw1MDBdLFsi
UnVsZSIsIk1ldGhvZCIsWyJMaXN0IixbIlJ1bGUiLCInQXhpc1BhZGRpbmcnIixbIlNjYWxlZCIs
Mi4wZS0yXV0sWyJSdWxlIiwiJ0RlZmF1bHRCb3VuZGFyeVN0eWxlJyIsIkF1dG9tYXRpYyJdLFsi
UnVsZSIsIidEZWZhdWx0R3JhcGhpY3NJbnRlcmFjdGlvbiciLFsiTGlzdCIsWyJSdWxlIiwiJ1Zl
cnNpb24nIiwxLjJdLFsiUnVsZSIsIidUcmFja01vdXNlUG9zaXRpb24nIixbIkxpc3QiLHRydWUs
ZmFsc2VdXSxbIlJ1bGUiLCInRWZmZWN0cyciLFsiTGlzdCIsWyJSdWxlIiwiJ0hpZ2hsaWdodCci
LFsiTGlzdCIsWyJSdWxlIiwiJ3JhdGlvJyIsMl1dXSxbIlJ1bGUiLCInSGlnaGxpZ2h0UG9pbnQn
IixbIkxpc3QiLFsiUnVsZSIsIidyYXRpbyciLDJdXV0sWyJSdWxlIiwiJ0Ryb3BsaW5lcyciLFsi
TGlzdCIsWyJSdWxlIiwiJ2ZyZWVmb3JtQ3Vyc29yTW9kZSciLHRydWVdLFsiUnVsZSIsIidwbGFj
ZW1lbnQnIixbIkxpc3QiLFsiUnVsZSIsIid4JyIsIidBbGwnIl0sWyJSdWxlIiwiJ3knIiwiJ05v
bmUnIl1dXV1dXV1dXSxbIlJ1bGUiLCInRGVmYXVsdE1lc2hTdHlsZSciLFsiQWJzb2x1dGVQb2lu
dFNpemUiLDZdXSxbIlJ1bGUiLCInRGVmYXVsdFBsb3RTdHlsZSciLFsiTGlzdCIsWyJEaXJlY3Rp
dmUiLFsiUkdCQ29sb3IiLDAuMzY4NDE3LDAuNTA2Nzc5LDAuNzA5Nzk4XSxbIkFic29sdXRlVGhp
Y2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC44ODA3MjIsMC42MTEwNDEs
MC4xNDIwNTFdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNv
bG9yIiwwLjU2MDE4MSwwLjY5MTU2OSwwLjE5NDg4NV0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42
XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuOTIyNTI2LDAuMzg1NjI2LDAuMjA5MTc5XSxb
IkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC41Mjg0
ODgsMC40NzA2MjQsMC43MDEzNTFdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0
aXZlIixbIlJHQkNvbG9yIiwwLjc3MjA3OSwwLjQzMTU1NCwwLjEwMjM4N10sWyJBYnNvbHV0ZVRo
aWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuMzYzODk4LDAuNjE4NTAx
LDAuNzgyMzQ5XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JD
b2xvciIsMSwwLjc1LDBdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixb
IlJHQkNvbG9yIiwwLjY0NzYyNCwwLjM3ODE2LDAuNjE0MDM3XSxbIkFic29sdXRlVGhpY2tuZXNz
IiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC41NzE1ODksMC41ODY0ODMsMC4wXSxb
IkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC45MTUs
MC4zMzI1LDAuMjEyNV0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsi
UkdCQ29sb3IiLDAuNDAwODIyMjI2MDkzNTI2NDcsMC41MjIwMDY2NjQzNDM4ODQxLDAuODVdLFsi
QWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjk3Mjgy
ODg5MDQzNzQxMDYsMC42MjE2NDQ0NTIxODcwNTMsNy4zMzYxOTk1ODE4OTkxNDJlLTJdLFsiQWJz
b2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjczNjc4MjY3
MjcwNTkwMSwwLjM1OCwwLjUwMzAyNjY1NzM3NTUzNjldLFsiQWJzb2x1dGVUaGlja25lc3MiLDEu
Nl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjI4MDI2NDQxMDM3Njk2NzAzLDAuNzE1LDAu
NDI5MjA4OTMyMjQ3NDk2NV0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV1dXSxbIlJ1bGUiLCIn
RG9tYWluUGFkZGluZyciLFsiU2NhbGVkIiwyLjBlLTJdXSxbIlJ1bGUiLCInUmFuZ2VQYWRkaW5n
JyIsWyJTY2FsZWQiLDUuMGUtMl1dLFsiUnVsZSIsIidPcHRpbWl6ZVBsb3RNYXJrZXJzJyIsdHJ1
ZV0sWyJSdWxlIiwiJ09wdGltaXplUGxvdE1hcmtlcnMnIix0cnVlXSxbIlJ1bGUiLCInQ29vcmRp
bmF0ZXNUb29sT3B0aW9ucyciLFsiTGlzdCIsWyJSdWxlIiwiJ0Rpc3BsYXlGdW5jdGlvbiciLFsi
RnVuY3Rpb24iLFsiTGlzdCIsWyJJZGVudGl0eSIsWyJQYXJ0IixbIlNsb3QiLDFdLDFdXSxbIklk
ZW50aXR5IixbIlBhcnQiLFsiU2xvdCIsMV0sMl1dXV1dLFsiUnVsZSIsIidDb3BpZWRWYWx1ZUZ1
bmN0aW9uJyIsWyJGdW5jdGlvbiIsWyJMaXN0IixbIklkZW50aXR5IixbIlBhcnQiLFsiU2xvdCIs
MV0sMV1dLFsiSWRlbnRpdHkiLFsiUGFydCIsWyJTbG90IiwxXSwyXV1dXV1dXV1dLFsiUnVsZSIs
IlBsb3RSYW5nZSIsWyJMaXN0IixbIkxpc3QiLDAuMCw2LjBdLFsiTGlzdCIsMCw4LjBdXV0sWyJS
dWxlIiwiUGxvdFJhbmdlQ2xpcHBpbmciLHRydWVdLFsiUnVsZSIsIlBsb3RSYW5nZVBhZGRpbmci
LFsiTGlzdCIsWyJMaXN0IixbIlNjYWxlZCIsMi4wZS0yXSxbIlNjYWxlZCIsMi4wZS0yXV0sWyJM
aXN0IixbIlNjYWxlZCIsMi4wZS0yXSxbIlNjYWxlZCIsNS4wZS0yXV1dXSxbIlJ1bGUiLCJUaWNr
cyIsWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0b21hdGljIl1dXV0=
`}>{`ListLinePlot[{1, 1, 2, 3, 5, 8}, ImageSize->500]`}</Wl>

Add a filling under the line

```mathematica
ListLinePlot[Prime[Range[25]], Filling -> Axis]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkxpc3QiXSxbIkdyYXBoaWNzQ29tcGxleCIsWyJMaXN0Iixb
Ikxpc3QiLDEuMCwyLjBdLFsiTGlzdCIsMi4wLDMuMF0sWyJMaXN0IiwzLjAsNS4wXSxbIkxpc3Qi
LDQuMCw3LjBdLFsiTGlzdCIsNS4wLDEuMWUxXSxbIkxpc3QiLDYuMCwxLjNlMV0sWyJMaXN0Iiw3
LjAsMS43ZTFdLFsiTGlzdCIsOC4wLDEuOWUxXSxbIkxpc3QiLDkuMCwyLjNlMV0sWyJMaXN0Iiwx
LjBlMSwyLjllMV0sWyJMaXN0IiwxLjFlMSwzLjFlMV0sWyJMaXN0IiwxLjJlMSwzLjdlMV0sWyJM
aXN0IiwxLjNlMSw0LjFlMV0sWyJMaXN0IiwxLjRlMSw0LjNlMV0sWyJMaXN0IiwxLjVlMSw0Ljdl
MV0sWyJMaXN0IiwxLjZlMSw1LjNlMV0sWyJMaXN0IiwxLjdlMSw1LjllMV0sWyJMaXN0IiwxLjhl
MSw2LjFlMV0sWyJMaXN0IiwxLjllMSw2LjdlMV0sWyJMaXN0IiwyLjBlMSw3LjFlMV0sWyJMaXN0
IiwyLjFlMSw3LjNlMV0sWyJMaXN0IiwyLjJlMSw3LjllMV0sWyJMaXN0IiwyLjNlMSw4LjNlMV0s
WyJMaXN0IiwyLjRlMSw4LjllMV0sWyJMaXN0IiwyLjVlMSw5LjdlMV0sWyJMaXN0IiwxLjAsMC4w
XSxbIkxpc3QiLDIuNWUxLDAuMF0sWyJMaXN0IiwxLjAsMi4wXSxbIkxpc3QiLDIuMCwzLjBdLFsi
TGlzdCIsMy4wLDUuMF0sWyJMaXN0Iiw0LjAsNy4wXSxbIkxpc3QiLDUuMCwxLjFlMV0sWyJMaXN0
Iiw2LjAsMS4zZTFdLFsiTGlzdCIsNy4wLDEuN2UxXSxbIkxpc3QiLDguMCwxLjllMV0sWyJMaXN0
Iiw5LjAsMi4zZTFdLFsiTGlzdCIsMS4wZTEsMi45ZTFdLFsiTGlzdCIsMS4xZTEsMy4xZTFdLFsi
TGlzdCIsMS4yZTEsMy43ZTFdLFsiTGlzdCIsMS4zZTEsNC4xZTFdLFsiTGlzdCIsMS40ZTEsNC4z
ZTFdLFsiTGlzdCIsMS41ZTEsNC43ZTFdLFsiTGlzdCIsMS42ZTEsNS4zZTFdLFsiTGlzdCIsMS43
ZTEsNS45ZTFdLFsiTGlzdCIsMS44ZTEsNi4xZTFdLFsiTGlzdCIsMS45ZTEsNi43ZTFdLFsiTGlz
dCIsMi4wZTEsNy4xZTFdLFsiTGlzdCIsMi4xZTEsNy4zZTFdLFsiTGlzdCIsMi4yZTEsNy45ZTFd
LFsiTGlzdCIsMi4zZTEsOC4zZTFdLFsiTGlzdCIsMi40ZTEsOC45ZTFdLFsiTGlzdCIsMi41ZTEs
OS43ZTFdXSxbIkxpc3QiLFsiTGlzdCIsWyJMaXN0Il0sWyJMaXN0IixbIkVkZ2VGb3JtIl0sWyJE
aXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuMzY4NDE3LDAuNTA2Nzc5LDAuNzA5Nzk4XSxbIk9wYWNp
dHkiLDAuMl1dLFsiR3JhcGhpY3NHcm91cCIsWyJMaXN0IixbIlBvbHlnb24iLFsiTGlzdCIsWyJM
aXN0IiwxLDI2LDI3LDI1LDI0LDIzLDIyLDIxLDIwLDE5LDE4LDE3LDE2LDE1LDE0LDEzLDEyLDEx
LDEwLDksOCw3LDYsNSw0LDMsMl1dXV1dXSxbIkxpc3QiXSxbIkxpc3QiXV0sWyJMaXN0IixbIkxp
c3QiXSxbIkxpc3QiXSxbIkxpc3QiLFsiSHVlIiwwLjY3LDAuNiwwLjZdLFsiRGlyZWN0aXZlIixb
IlBvaW50U2l6ZSIsWyJSYXRpb25hbCIsNywzNjBdXSxbIlJHQkNvbG9yIiwwLjM2ODQxNywwLjUw
Njc3OSwwLjcwOTc5OF0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJMaW5lIixbIkxpc3Qi
LDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIy
LDIzLDI0LDI1XV1dXV1dLFsiTGlzdCIsWyJMaXN0Il0sWyJMaXN0Il1dXSxbIkxpc3QiLFsiUnVs
ZSIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5Il0sWyJSdWxlIiwiRGlzcGxheUZ1bmN0aW9u
IiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJBc3BlY3RSYXRpbyIsWyJQb3dlciIsIkdvbGRlblJhdGlv
IiwtMV1dLFsiUnVsZSIsIkF4ZXMiLFsiTGlzdCIsdHJ1ZSx0cnVlXV0sWyJSdWxlIiwiQXhlc0xh
YmVsIixbIkxpc3QiLCJOb25lIiwiTm9uZSJdXSxbIlJ1bGUiLCJBeGVzT3JpZ2luIixbIkxpc3Qi
LDAuMCwwXV0sWyJSdWxlRGVsYXllZCIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5Il0sWyJS
dWxlIiwiRnJhbWUiLFsiTGlzdCIsWyJMaXN0IixmYWxzZSxmYWxzZV0sWyJMaXN0IixmYWxzZSxm
YWxzZV1dXSxbIlJ1bGUiLCJGcmFtZUxhYmVsIixbIkxpc3QiLFsiTGlzdCIsIk5vbmUiLCJOb25l
Il0sWyJMaXN0IiwiTm9uZSIsIk5vbmUiXV1dLFsiUnVsZSIsIkZyYW1lVGlja3MiLFsiTGlzdCIs
WyJMaXN0IiwiQXV0b21hdGljIiwiQXV0b21hdGljIl0sWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0
b21hdGljIl1dXSxbIlJ1bGUiLCJHcmlkTGluZXMiLFsiTGlzdCIsIk5vbmUiLCJOb25lIl1dLFsi
UnVsZSIsIkdyaWRMaW5lc1N0eWxlIixbIkRpcmVjdGl2ZSIsWyJHcmF5TGV2ZWwiLDAuNSwwLjRd
XV0sWyJSdWxlIiwiSW1hZ2VTaXplIiw1MDBdLFsiUnVsZSIsIk1ldGhvZCIsWyJMaXN0IixbIlJ1
bGUiLCInQXhpc1BhZGRpbmcnIixbIlNjYWxlZCIsMi4wZS0yXV0sWyJSdWxlIiwiJ0RlZmF1bHRC
b3VuZGFyeVN0eWxlJyIsIkF1dG9tYXRpYyJdLFsiUnVsZSIsIidEZWZhdWx0R3JhcGhpY3NJbnRl
cmFjdGlvbiciLFsiTGlzdCIsWyJSdWxlIiwiJ1ZlcnNpb24nIiwxLjJdLFsiUnVsZSIsIidUcmFj
a01vdXNlUG9zaXRpb24nIixbIkxpc3QiLHRydWUsZmFsc2VdXSxbIlJ1bGUiLCInRWZmZWN0cyci
LFsiTGlzdCIsWyJSdWxlIiwiJ0hpZ2hsaWdodCciLFsiTGlzdCIsWyJSdWxlIiwiJ3JhdGlvJyIs
Ml1dXSxbIlJ1bGUiLCInSGlnaGxpZ2h0UG9pbnQnIixbIkxpc3QiLFsiUnVsZSIsIidyYXRpbyci
LDJdXV0sWyJSdWxlIiwiJ0Ryb3BsaW5lcyciLFsiTGlzdCIsWyJSdWxlIiwiJ2ZyZWVmb3JtQ3Vy
c29yTW9kZSciLHRydWVdLFsiUnVsZSIsIidwbGFjZW1lbnQnIixbIkxpc3QiLFsiUnVsZSIsIid4
JyIsIidBbGwnIl0sWyJSdWxlIiwiJ3knIiwiJ05vbmUnIl1dXV1dXV1dXSxbIlJ1bGUiLCInRGVm
YXVsdE1lc2hTdHlsZSciLFsiQWJzb2x1dGVQb2ludFNpemUiLDZdXSxbIlJ1bGUiLCInRGVmYXVs
dFBsb3RTdHlsZSciLFsiTGlzdCIsWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuMzY4NDE3LDAu
NTA2Nzc5LDAuNzA5Nzk4XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIs
WyJSR0JDb2xvciIsMC44ODA3MjIsMC42MTEwNDEsMC4xNDIwNTFdLFsiQWJzb2x1dGVUaGlja25l
c3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjU2MDE4MSwwLjY5MTU2OSwwLjE5
NDg4NV0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3Ii
LDAuOTIyNTI2LDAuMzg1NjI2LDAuMjA5MTc5XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxb
IkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC41Mjg0ODgsMC40NzA2MjQsMC43MDEzNTFdLFsiQWJz
b2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjc3MjA3OSww
LjQzMTU1NCwwLjEwMjM4N10sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUi
LFsiUkdCQ29sb3IiLDAuMzYzODk4LDAuNjE4NTAxLDAuNzgyMzQ5XSxbIkFic29sdXRlVGhpY2tu
ZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMSwwLjc1LDBdLFsiQWJzb2x1dGVU
aGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjY0NzYyNCwwLjM3ODE2
LDAuNjE0MDM3XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JD
b2xvciIsMC41NzE1ODksMC41ODY0ODMsMC4wXSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxb
IkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC45MTUsMC4zMzI1LDAuMjEyNV0sWyJBYnNvbHV0ZVRo
aWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuNDAwODIyMjI2MDkzNTI2
NDcsMC41MjIwMDY2NjQzNDM4ODQxLDAuODVdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsi
RGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjk3MjgyODg5MDQzNzQxMDYsMC42MjE2NDQ0NTIxODcw
NTMsNy4zMzYxOTk1ODE4OTkxNDJlLTJdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGly
ZWN0aXZlIixbIlJHQkNvbG9yIiwwLjczNjc4MjY3MjcwNTkwMSwwLjM1OCwwLjUwMzAyNjY1NzM3
NTUzNjldLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9y
IiwwLjI4MDI2NDQxMDM3Njk2NzAzLDAuNzE1LDAuNDI5MjA4OTMyMjQ3NDk2NV0sWyJBYnNvbHV0
ZVRoaWNrbmVzcyIsMS42XV1dXSxbIlJ1bGUiLCInRG9tYWluUGFkZGluZyciLFsiU2NhbGVkIiwy
LjBlLTJdXSxbIlJ1bGUiLCInUmFuZ2VQYWRkaW5nJyIsWyJTY2FsZWQiLDUuMGUtMl1dLFsiUnVs
ZSIsIidPcHRpbWl6ZVBsb3RNYXJrZXJzJyIsdHJ1ZV0sWyJSdWxlIiwiJ09wdGltaXplUGxvdE1h
cmtlcnMnIix0cnVlXSxbIlJ1bGUiLCInQ29vcmRpbmF0ZXNUb29sT3B0aW9ucyciLFsiTGlzdCIs
WyJSdWxlIiwiJ0Rpc3BsYXlGdW5jdGlvbiciLFsiRnVuY3Rpb24iLFsiTGlzdCIsWyJJZGVudGl0
eSIsWyJQYXJ0IixbIlNsb3QiLDFdLDFdXSxbIklkZW50aXR5IixbIlBhcnQiLFsiU2xvdCIsMV0s
Ml1dXV1dLFsiUnVsZSIsIidDb3BpZWRWYWx1ZUZ1bmN0aW9uJyIsWyJGdW5jdGlvbiIsWyJMaXN0
IixbIklkZW50aXR5IixbIlBhcnQiLFsiU2xvdCIsMV0sMV1dLFsiSWRlbnRpdHkiLFsiUGFydCIs
WyJTbG90IiwxXSwyXV1dXV1dXV1dLFsiUnVsZSIsIlBsb3RSYW5nZSIsWyJMaXN0IixbIkxpc3Qi
LDAuMCwyLjVlMV0sWyJMaXN0IiwwLDkuN2UxXV1dLFsiUnVsZSIsIlBsb3RSYW5nZUNsaXBwaW5n
Iix0cnVlXSxbIlJ1bGUiLCJQbG90UmFuZ2VQYWRkaW5nIixbIkxpc3QiLFsiTGlzdCIsWyJTY2Fs
ZWQiLDIuMGUtMl0sWyJTY2FsZWQiLDIuMGUtMl1dLFsiTGlzdCIsWyJTY2FsZWQiLDIuMGUtMl0s
WyJTY2FsZWQiLDUuMGUtMl1dXV0sWyJSdWxlIiwiVGlja3MiLFsiTGlzdCIsIkF1dG9tYXRpYyIs
IkF1dG9tYXRpYyJdXV1d
`}>{`ListLinePlot[Prime[Range[25]], Filling -> Axis, ImageSize->500]`}</Wl>

Random walk

```mathematica
ListLinePlot[Accumulate[RandomReal[{-1, 1}, {250, 2}]]]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkxpc3QiXSxbIkxpc3QiLFsiTGlzdCIsWyJMaXN0Il0sWyJM
aXN0Il0sWyJMaXN0IixbIkh1ZSIsMC42NywwLjYsMC42XSxbIkRpcmVjdGl2ZSIsWyJQb2ludFNp
emUiLFsiUmF0aW9uYWwiLDEsNzJdXSxbIlJHQkNvbG9yIiwwLjM2ODQxNywwLjUwNjc3OSwwLjcw
OTc5OF0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJMaW5lIixbIkxpc3QiLFsiTGlzdCIs
MC42MzIyOTM4MzcwODE2ODg2LDAuNjgwMzA4MDE5MTgwNjExOV0sWyJMaXN0IiwwLjM3MDM2NTI2
OTQ5ODEwNzQ0LDEuNjcwODU2MDYxODI2OTkwOF0sWyJMaXN0IiwtMC4yMDAxNDA1MzQ3Nzg3Njk5
MiwyLjE1MTA0MzAwMjQxMTA1NjddLFsiTGlzdCIsMC43OTE0ODk3MTMyOTUxMjczLDEuODQ0NzU0
MjAyNDk3Mjc4NV0sWyJMaXN0IiwxLjQ3OTA2MjE5MDYzNzAxMjMsMC45MDY5Mzg5NDQ3NDM2Nzgy
XSxbIkxpc3QiLDAuNjc0MzMzMDQzMDUzNTAyNCwwLjU4NzE2MTI3MzM1MDk2OTVdLFsiTGlzdCIs
MS4wMjU2NjcyODM2OTQzMzI4LDEuMjQ3Nzc5OTY2NzgxNjI5OF0sWyJMaXN0IiwwLjQxNDE1NjU0
NzA5NjUwNzQsMC42NDY0NzYzNTE3NjEzOTldLFsiTGlzdCIsMS4yNzQ2MTU4OTk5NDY1NzEzLDEu
NDM2MDk2MjYzMjMxOTUxNF0sWyJMaXN0IiwwLjU1OTQ2NDgyMjk3OTAwMzgsMi4zODI5NjE1MDM2
MTk1OTY2XSxbIkxpc3QiLC0wLjE0Mzg5Mzk0MTI2NTA3NzcsMi41ODc3NjkwODYxNTE2MzZdLFsi
TGlzdCIsMC4xMjUxMzY5MTEwMzI0NjEzOCwzLjIzMjQxODM3Nzg5OTg2MzRdLFsiTGlzdCIsMC45
NzE3MTM2NDY4ODA2NzYsMi4yNTgzNzk4MzQ5MTEyNzA1XSxbIkxpc3QiLC0xLjUyNTUxOTU0NTQw
NzU4MzJlLTIsMi4wMzA0NTk0MTIxOTI0MTFdLFsiTGlzdCIsLTAuNTgzOTQzMDMwMDQxMjQ2OSwy
LjM3NTkyMzYxMjcyNjM0MV0sWyJMaXN0IiwwLjMxNzIzNzQxNjM0MzgxNDk3LDMuMjUzODU5OTk4
NTY0MTE0XSxbIkxpc3QiLDAuOTI5MzEzMjI0ODYxMjI0OCwyLjM0MTcyNTMyNTY0MzA2NV0sWyJM
aXN0IiwxLjkxMzQ2OTU1NTgzODgzMDIsMS43NjUyOTEzOTM2NzEzNzYzXSxbIkxpc3QiLDEuMjc0
NzkyMTIwMzc4NDY1MSwyLjcyODg0NzM3MDE5MDc3NzZdLFsiTGlzdCIsMi4xNTU4MjcxNTY4ODI4
NzE1LDIuMzg0Mjc3MzU5NjY5NjE2N10sWyJMaXN0IiwyLjc5OTQzNzM1Mjk1OTg2NTUsMS45NTI0
MzM4MzYxNTQyMzUzXSxbIkxpc3QiLDIuMjExODk1MzU0MzY1NTI1NSwxLjkzMjU4NzA3NjYxNjM1
MzVdLFsiTGlzdCIsMS43Njg1MTgxMTQzMDU2NzE0LDEuODY5ODE0MzcyNjU5NjM5XSxbIkxpc3Qi
LDIuMjA2OTMyODc4NDMzMDc0LDIuNTA2NTY3MzM3ODkwMTk1XSxbIkxpc3QiLDEuNzYwNTA5MzA1
NjQzMzcxLDIuNDc0MTE4MDk0NzExNTA0XSxbIkxpc3QiLDEuMDgyNTEyMDQxNjEzMjU4NSwyLjQ0
ODE4MDM3MTIwMzM2NF0sWyJMaXN0IiwxLjk0ODE0MjY2Nzc1NTA1NjQsMi43NTM1MzE1NTI1MzM5
MjFdLFsiTGlzdCIsMS44ODk5NzAyMzE2OTY1MDgxLDEuODI5NDc5OTkyODE2NTIzM10sWyJMaXN0
IiwxLjA4MzI5ODY3MTI1ODg0ODIsMS40MjAyNzcxNTk3NDU0MjUzXSxbIkxpc3QiLDEuMzA5NjQ0
NzYyNTkxOTg3LDIuMTY4MDU2ODM3MjgzOTI0NF0sWyJMaXN0IiwwLjc4MjU0MjY4NjEzNzM1Mzks
Mi40ODMyNDY4OTM5MDQ2MjQ0XSxbIkxpc3QiLDAuNjQ1MDQ0NTE3MjM5NDEzNSwyLjE5NDk1Nzkw
MTE2OTc1Nl0sWyJMaXN0IiwxLjI5OTczMDQ1MDY0MTAwMjYsMy4wMTY3MjkwMzQxNjk4OV0sWyJM
aXN0IiwxLjAzNDY4MTQ4MTk0MTA1NzIsMy42MzgzNzI3ODcwMzgzMDk2XSxbIkxpc3QiLDAuMjcw
Nzg4MjIwMzY0NzUyMjUsNC4zOTgxNTI0NzkwOTk0NDNdLFsiTGlzdCIsLTAuNjQyODE3NjYyNjY3
NjA4OCwzLjUyMTQzOTk5MjYxNjY0M10sWyJMaXN0IiwtMC4xMzA3MTI4MTM4NTE4MDc2Niw0LjQ2
MDQ3NTM3NDY0Nzc3XSxbIkxpc3QiLDAuNjE4OTQ0NTM0MDY0Mjg0Myw0LjU4NDQwMTM1MDIxNjgx
OV0sWyJMaXN0IiwwLjQ2MTk5ODUzODM1MTI2OTI1LDQuNzAzNjA2NjM5Njc5NDMxXSxbIkxpc3Qi
LC0wLjIxNzUxNDMzNjYyMDI1Nzg4LDQuNzAzNzAyMjQxNTI4MTU0XSxbIkxpc3QiLC0xLjA2MDE0
OTc4MTQ4MTI4NSw1LjE2MTUwODI4OTk2MDk2N10sWyJMaXN0IiwtMS43Njk0MTgyMDMxMzMxNTMz
LDUuOTY3NjM4MzkxNzkyOTU4XSxbIkxpc3QiLC0yLjExODUwNTgwNjY2ODc3Nyw2LjA5ODU0MDE0
MzE2MzI0OF0sWyJMaXN0IiwtMS45NDIyMzkyNDI3MzgyNTYsNS41NjU2MTg2OTMyNDQxMDJdLFsi
TGlzdCIsLTEuMjc1NjU5NDMwOTQ3Njc5NCw1LjcyODU2NTI2ODkyMTA5MV0sWyJMaXN0IiwtMC41
OTExNjc3MjExODM4ODk5LDQuODQ5MzI5Mjc5MzM1ODY3XSxbIkxpc3QiLDAuMjYyNzYyNDc5MzQ4
NDAzMTMsMy44ODY0MTU4ODI4OTQ0MTEzXSxbIkxpc3QiLC0wLjU5OTc5NDE0NDI0MTk0NTcsMy4z
MTM1NjM4OTkxMTk3Nzg0XSxbIkxpc3QiLDAuMzc4OTAxMTU2OTQ3NDMxLDMuOTYxMTkzMzA4ODY5
MzgzNl0sWyJMaXN0IiwwLjU4Nzg0NDM3NTEwNjExOTUsMy4xMTExNzgyMjMyMzE5MTM2XSxbIkxp
c3QiLDAuMzQ2ODU3ODE3OTUzNzEwMDcsNC4wNTI1MDE4NzQ1MDA2MjhdLFsiTGlzdCIsLTguNTk0
Mzk0MzI2NjkyNjIzZS0yLDMuMzUzODQ5NTM5NDIxMTNdLFsiTGlzdCIsMi40MDYzMzMyNzU0NDM3
NzI3ZS0yLDMuNzI4MzUwODM2MDM1NDcxM10sWyJMaXN0IiwwLjg2NDI3NjM2MDM5NzAyNDUsMy40
NjQxNjQ0ODEyNDQ4N10sWyJMaXN0IiwwLjI3Njc0MTQ1NDY1MzczOSwyLjgwMDgyNjE3MzYyNzY2
Ml0sWyJMaXN0IiwwLjQwNTQ1Mzk4OTUzMTg5NjkzLDIuNjk2ODQ5ODA4ODM3Mjc4OF0sWyJMaXN0
Iiw0Ljc1MTQyODQwMDU3MzA5OWUtMiwyLjkwNTQzMDc2MTY5Njg0MjRdLFsiTGlzdCIsLTAuMTA1
OTA5MDUzNjk0MDk4NTMsMi42NTUzNjM4NzcwOTMwODldLFsiTGlzdCIsLTAuMjIzNDcwNTM2NjM5
NzEwMjgsMi41ODk3NzE5NTY5MTYyNzZdLFsiTGlzdCIsLTEuMDMxNzAxNDg1NjAwNTkwOCwyLjYx
NDUyNjY0ODA0Njk1N10sWyJMaXN0IiwtMC4zMjE2NDMxOTc0NjEwODYwNSwzLjUzMTg4NjcwMzAx
NDE2NjVdLFsiTGlzdCIsMC4yMTkxNTU3NzM4NDkwOTU2OCwzLjMxNTg0MTUyMjM2ODc0XSxbIkxp
c3QiLC0wLjY0NTY5NTM3MzY5OTMzNCwzLjY1NjAzMTIyOTY4Nzc5NDZdLFsiTGlzdCIsLTEuMTkw
NTc1MDc3NDQzMjk4LDMuNzA0MzY3Mzc2Nzg4ODRdLFsiTGlzdCIsLTEuMTg0NDc2MDM1OTM3MTkz
Myw0LjAxMjAyODkzMjI5NzgwM10sWyJMaXN0IiwtMC44NjA1NzA1MTc3OTU2MDY0LDMuMTUxODc0
MDYxNDU5NTk2NF0sWyJMaXN0IiwtMC40NDY2NzY3MDIxMjQwMjIxLDIuMzQyMTE1MDQwMzIwNTUy
NF0sWyJMaXN0IiwtMC4zODkyOTA0MTM1MzE5Mzg4MywyLjc2OTA4MzgzMzg4NDIyOF0sWyJMaXN0
IiwtMC42MzA5NDY2NzE3MzgyOTQxLDIuNzQyNDc1NDcxNzAyNjM0XSxbIkxpc3QiLC0xLjE1ODIx
NTA3MTY2MzMwMjIsMi45Mzg4ODkyNDQ5Njc2MzM0XSxbIkxpc3QiLC0wLjYxOTQxNDEzMzIzODY4
MDksMi4wNDkwMTQ0Nzc4Nzg2MTcyXSxbIkxpc3QiLDAuMjQ2MTg3NjQxNjM2NTcwNDgsMS40MzE0
MDUwODIxMDMzMzQyXSxbIkxpc3QiLDEuMjM5MDIyMDgzOTA1ODkxOSwxLjYzOTY5NzM2MDY0NjU5
NjVdLFsiTGlzdCIsMC41MDg4ODQzNTQxODA5OTEzLDIuNDkxMjkzNzk1OTU2NDQ5NF0sWyJMaXN0
IiwtMC4xMjMxOTQ3Nzc0NTY1MDY1MywyLjc0NjU0NjU0MDIxMzMzNF0sWyJMaXN0IiwtNC40Mzgx
ODUzNzQ4MTA5NTQ1ZS0yLDIuMjk4NjYzMzM1ODUwNjM1Nl0sWyJMaXN0IiwtMC40NzA1NDYzMTkx
NzYwNzEwNCwyLjY2MTg3Nzc2ODE4MzQ2MV0sWyJMaXN0IiwtMC43MDYyMDIyNjExMTk2NTA2LDEu
OTA3OTI3MjQ1ODM1MTFdLFsiTGlzdCIsLTAuNzI1MzExNzAyNzM1MDEwMiwyLjcxMjM4NTQyMTc0
NDAxODZdLFsiTGlzdCIsLTAuMjgyNDE5OTM2MTkyNzE1NzcsMi40NDc5NzcwMzI1OTg1NDZdLFsi
TGlzdCIsMC4xMDAyNzk4MDIzMjQxMDc2LDIuNzAxNTYzNjI2NDI4MzYwNV0sWyJMaXN0IiwtNS4x
NDAwNTk3MzQ0ODc1MDFlLTIsMy4wMjM1MjY0NzQ4NTAxMjJdLFsiTGlzdCIsLTAuNTMxODM2Njg1
NTcwMjUyOCwyLjkyMzQ2NzUwNTQ0NzE5MTNdLFsiTGlzdCIsLTAuMTQyNDkxMDYxOTIxNzIwNzks
My4zNDkxMTEwMzc0MjMwMjRdLFsiTGlzdCIsLTAuNDMwMTE5MjAzOTc0MzQ1MzMsNC4xMzk0OTc3
NTEwOTA3MDY1XSxbIkxpc3QiLC0wLjQ4NzA3ODM5OTYyNjY5Mzg2LDMuNDYwODk1MjA3OTAwNDkz
NV0sWyJMaXN0IiwtMC4xNzkzNzQ0OTY3NTQzOCw0LjM3NDE2OTcwMzc3MzI2Nl0sWyJMaXN0Iiwt
MC4yMTUyOTgxODc0OTg4NSw0Ljg0NjA1MDk3NjQxMDU5MTVdLFsiTGlzdCIsMC42MzQ0NzMyNTgw
NDg4Nzg2LDQuNjQzMDc0NjE1OTQ4MzM2XSxbIkxpc3QiLC0wLjIyNTg5MzU1NTI3NzY3MzMsNC44
MzI3MjM0MTM5MTIyMjE1XSxbIkxpc3QiLC0wLjY5MjAwMjc3MTg0MDQ3MTUsNC41OTMwMjg3MDA4
NzI2ODhdLFsiTGlzdCIsLTAuNjc4ODI2ODY4ODE5MjYyNyw0LjA5NjM5MDgzMDc0ODg2OF0sWyJM
aXN0IiwtMC4yMzAyMzgzNzc0MjM1ODk2Niw0LjgyMzE4MzkyODUxNjQwN10sWyJMaXN0IiwtMC40
MjYwNTcwNTY0NzcyNjk2Niw0LjIyMzc2Mjc0NjU1Njk2NDVdLFsiTGlzdCIsMC4yMTc5MTk1ODE1
MzgzODM0Miw0LjgxMDMyMzEwODc2MjQ4Nl0sWyJMaXN0IiwwLjI0NjY3NDY2MzA4NjU1NDYsNC45
ODI4NTE3MTg1NjYzOTA1XSxbIkxpc3QiLC0zLjM0MjcyMDg4ODcyMjk4M2UtMiw0LjI3MjIzMDE5
MTY4ODIwOV0sWyJMaXN0IiwtMC4xMjI4NjU4NzY0MjI1OTA1LDQuMDI4ODgyMDI2MTcxNDg0XSxb
Ikxpc3QiLDAuNTI4MzY0ODk3MTcyNzY4OCwzLjE4MzQ2MjAxNjI4MjM5XSxbIkxpc3QiLDEuMDYx
MDEyMTQ0NjUyMDAzNiwzLjYwMTAxMTMzMDY5Mjk4XV1dXV1dLFsiTGlzdCIsWyJMaXN0Il0sWyJM
aXN0Il1dXSxbIkxpc3QiLFsiUnVsZSIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5Il0sWyJS
dWxlIiwiRGlzcGxheUZ1bmN0aW9uIiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJBc3BlY3RSYXRpbyIs
WyJQb3dlciIsIkdvbGRlblJhdGlvIiwtMV1dLFsiUnVsZSIsIkF4ZXMiLFsiTGlzdCIsdHJ1ZSx0
cnVlXV0sWyJSdWxlIiwiQXhlc0xhYmVsIixbIkxpc3QiLCJOb25lIiwiTm9uZSJdXSxbIlJ1bGUi
LCJBeGVzT3JpZ2luIixbIkxpc3QiLDAsMF1dLFsiUnVsZURlbGF5ZWQiLCJEaXNwbGF5RnVuY3Rp
b24iLCJJZGVudGl0eSJdLFsiUnVsZSIsIkZyYW1lIixbIkxpc3QiLFsiTGlzdCIsZmFsc2UsZmFs
c2VdLFsiTGlzdCIsZmFsc2UsZmFsc2VdXV0sWyJSdWxlIiwiRnJhbWVMYWJlbCIsWyJMaXN0Iixb
Ikxpc3QiLCJOb25lIiwiTm9uZSJdLFsiTGlzdCIsIk5vbmUiLCJOb25lIl1dXSxbIlJ1bGUiLCJG
cmFtZVRpY2tzIixbIkxpc3QiLFsiTGlzdCIsIkF1dG9tYXRpYyIsIkF1dG9tYXRpYyJdLFsiTGlz
dCIsIkF1dG9tYXRpYyIsIkF1dG9tYXRpYyJdXV0sWyJSdWxlIiwiR3JpZExpbmVzIixbIkxpc3Qi
LCJOb25lIiwiTm9uZSJdXSxbIlJ1bGUiLCJHcmlkTGluZXNTdHlsZSIsWyJEaXJlY3RpdmUiLFsi
R3JheUxldmVsIiwwLjUsMC40XV1dLFsiUnVsZSIsIkltYWdlU2l6ZSIsNTAwXSxbIlJ1bGUiLCJN
ZXRob2QiLFsiTGlzdCIsWyJSdWxlIiwiJ0F4aXNQYWRkaW5nJyIsWyJTY2FsZWQiLDIuMGUtMl1d
LFsiUnVsZSIsIidEZWZhdWx0Qm91bmRhcnlTdHlsZSciLCJBdXRvbWF0aWMiXSxbIlJ1bGUiLCIn
RGVmYXVsdEdyYXBoaWNzSW50ZXJhY3Rpb24nIixbIkxpc3QiLFsiUnVsZSIsIidWZXJzaW9uJyIs
MS4yXSxbIlJ1bGUiLCInVHJhY2tNb3VzZVBvc2l0aW9uJyIsWyJMaXN0Iix0cnVlLGZhbHNlXV0s
WyJSdWxlIiwiJ0VmZmVjdHMnIixbIkxpc3QiLFsiUnVsZSIsIidIaWdobGlnaHQnIixbIkxpc3Qi
LFsiUnVsZSIsIidyYXRpbyciLDJdXV0sWyJSdWxlIiwiJ0hpZ2hsaWdodFBvaW50JyIsWyJMaXN0
IixbIlJ1bGUiLCIncmF0aW8nIiwyXV1dLFsiUnVsZSIsIidEcm9wbGluZXMnIixbIkxpc3QiLFsi
UnVsZSIsIidmcmVlZm9ybUN1cnNvck1vZGUnIix0cnVlXSxbIlJ1bGUiLCIncGxhY2VtZW50JyIs
WyJMaXN0IixbIlJ1bGUiLCIneCciLCInQWxsJyJdLFsiUnVsZSIsIid5JyIsIidOb25lJyJdXV1d
XV1dXV0sWyJSdWxlIiwiJ0RlZmF1bHRNZXNoU3R5bGUnIixbIkFic29sdXRlUG9pbnRTaXplIiw2
XV0sWyJSdWxlIiwiJ0RlZmF1bHRQbG90U3R5bGUnIixbIkxpc3QiLFsiRGlyZWN0aXZlIixbIlJH
QkNvbG9yIiwwLjM2ODQxNywwLjUwNjc3OSwwLjcwOTc5OF0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIs
MS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuODgwNzIyLDAuNjExMDQxLDAuMTQyMDUx
XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC41
NjAxODEsMC42OTE1NjksMC4xOTQ4ODVdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGly
ZWN0aXZlIixbIlJHQkNvbG9yIiwwLjkyMjUyNiwwLjM4NTYyNiwwLjIwOTE3OV0sWyJBYnNvbHV0
ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuNTI4NDg4LDAuNDcw
NjI0LDAuNzAxMzUxXSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJS
R0JDb2xvciIsMC43NzIwNzksMC40MzE1NTQsMC4xMDIzODddLFsiQWJzb2x1dGVUaGlja25lc3Mi
LDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9yIiwwLjM2Mzg5OCwwLjYxODUwMSwwLjc4MjM0
OV0sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDEs
MC43NSwwXSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xv
ciIsMC42NDc2MjQsMC4zNzgxNiwwLjYxNDAzN10sWyJBYnNvbHV0ZVRoaWNrbmVzcyIsMS42XV0s
WyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuNTcxNTg5LDAuNTg2NDgzLDAuMF0sWyJBYnNvbHV0
ZVRoaWNrbmVzcyIsMS42XV0sWyJEaXJlY3RpdmUiLFsiUkdCQ29sb3IiLDAuOTE1LDAuMzMyNSww
LjIxMjVdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dLFsiRGlyZWN0aXZlIixbIlJHQkNvbG9y
IiwwLjQwMDgyMjIyNjA5MzUyNjQ3LDAuNTIyMDA2NjY0MzQzODg0MSwwLjg1XSxbIkFic29sdXRl
VGhpY2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC45NzI4Mjg4OTA0Mzc0
MTA2LDAuNjIxNjQ0NDUyMTg3MDUzLDcuMzM2MTk5NTgxODk5MTQyZS0yXSxbIkFic29sdXRlVGhp
Y2tuZXNzIiwxLjZdXSxbIkRpcmVjdGl2ZSIsWyJSR0JDb2xvciIsMC43MzY3ODI2NzI3MDU5MDEs
MC4zNTgsMC41MDMwMjY2NTczNzU1MzY5XSxbIkFic29sdXRlVGhpY2tuZXNzIiwxLjZdXSxbIkRp
cmVjdGl2ZSIsWyJSR0JDb2xvciIsMC4yODAyNjQ0MTAzNzY5NjcwMywwLjcxNSwwLjQyOTIwODkz
MjI0NzQ5NjVdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1dXV0sWyJSdWxlIiwiJ0RvbWFpblBh
ZGRpbmcnIixbIlNjYWxlZCIsMi4wZS0yXV0sWyJSdWxlIiwiJ1JhbmdlUGFkZGluZyciLFsiU2Nh
bGVkIiw1LjBlLTJdXSxbIlJ1bGUiLCInT3B0aW1pemVQbG90TWFya2VycyciLHRydWVdLFsiUnVs
ZSIsIidPcHRpbWl6ZVBsb3RNYXJrZXJzJyIsdHJ1ZV0sWyJSdWxlIiwiJ0Nvb3JkaW5hdGVzVG9v
bE9wdGlvbnMnIixbIkxpc3QiLFsiUnVsZSIsIidEaXNwbGF5RnVuY3Rpb24nIixbIkZ1bmN0aW9u
IixbIkxpc3QiLFsiSWRlbnRpdHkiLFsiUGFydCIsWyJTbG90IiwxXSwxXV0sWyJJZGVudGl0eSIs
WyJQYXJ0IixbIlNsb3QiLDFdLDJdXV1dXSxbIlJ1bGUiLCInQ29waWVkVmFsdWVGdW5jdGlvbici
LFsiRnVuY3Rpb24iLFsiTGlzdCIsWyJJZGVudGl0eSIsWyJQYXJ0IixbIlNsb3QiLDFdLDFdXSxb
IklkZW50aXR5IixbIlBhcnQiLFsiU2xvdCIsMV0sMl1dXV1dXV1dXSxbIlJ1bGUiLCJQbG90UmFu
Z2UiLFsiTGlzdCIsWyJMaXN0IiwtMi4xMTg1MDU4MDY2Njg3NzcsMi43OTk0MzczNTI5NTk4NjU1
XSxbIkxpc3QiLDAsNi4wOTg1NDAxNDMxNjMyNDhdXV0sWyJSdWxlIiwiUGxvdFJhbmdlQ2xpcHBp
bmciLHRydWVdLFsiUnVsZSIsIlBsb3RSYW5nZVBhZGRpbmciLFsiTGlzdCIsWyJMaXN0IixbIlNj
YWxlZCIsMi4wZS0yXSxbIlNjYWxlZCIsMi4wZS0yXV0sWyJMaXN0IixbIlNjYWxlZCIsMi4wZS0y
XSxbIlNjYWxlZCIsNS4wZS0yXV1dXSxbIlJ1bGUiLCJUaWNrcyIsWyJMaXN0IiwiQXV0b21hdGlj
IiwiQXV0b21hdGljIl1dXV0=
`}>{`ListLinePlot[Accumulate[RandomReal[{-1, 1}, {100, 2}]], ImageSize->500]`}</Wl>

## Dev notes
This function does not support dynamic updates, please use raw `Graphics` or alternative way - [ListLinePlotly](ListLinePlotly.md) to animate your data.