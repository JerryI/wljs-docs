---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
```mathematica
Inset[canvas_Graphics, pos_List]
```

a graphics object, that allows to put another [Graphics](Graphics.md) into the canvas. `pos` has to be a 2D vector, that specifies the position of the inset.

An example

```mathematica
inset = Graphics[{
  LightRed,
  Disk[{0,0},0.1],
  Black, Directive[FontSize->16], Text["Test", {-1/16,-1/30}]
}, PlotRange->{{-1,1}, {-1,1}}];

Plot[x, {x,0,10}, Epilog->{Inset[inset]}]
```

<Wl data={`WyJHcmFwaGljcyIsWyJBbm5vdGF0aW9uIixbIkxpc3QiLFsiTGlzdCIsWyJMaXN0IixbIkxpc3Qi
XSxbIkxpc3QiXSxbIkFubm90YXRpb24iLFsiTGlzdCIsWyJEaXJlY3RpdmUiLFsiT3BhY2l0eSIs
MS4wXSxbIlJHQkNvbG9yIiwwLjM2ODQxNywwLjUwNjc3OSwwLjcwOTc5OF0sWyJBYnNvbHV0ZVRo
aWNrbmVzcyIsMl1dLFsiTGluZSIsWyJMaXN0IixbIkxpc3QiLDIuMDQwODE2MzI2NTMwNjEyMWUt
NywyLjA0MDgxNjMyNjUzMDYxMjFlLTddLFsiTGlzdCIsMy4wNjcxNzkyMDU1OTYyNjdlLTMsMy4w
NjcxNzkyMDU1OTYyNjdlLTNdLFsiTGlzdCIsNi4xMzQxNTQzMjk1NTk4ODFlLTMsNi4xMzQxNTQz
Mjk1NTk4ODFlLTNdLFsiTGlzdCIsMS4yMjY4MTA0NTc3NDg3MTFlLTIsMS4yMjY4MTA0NTc3NDg3
MTFlLTJdLFsiTGlzdCIsMi40NTM2MDA1MDczMzQxNTdlLTIsMi40NTM2MDA1MDczMzQxNTdlLTJd
LFsiTGlzdCIsNC45MDcxODA2MDY1MDUwNDhlLTIsNC45MDcxODA2MDY1MDUwNDhlLTJdLFsiTGlz
dCIsOS44MTQzNDA4MDQ4NDY4MzFlLTIsOS44MTQzNDA4MDQ4NDY4MzFlLTJdLFsiTGlzdCIsMC4x
OTYyODY2MTIwMTUzMDM5OCwwLjE5NjI4NjYxMjAxNTMwMzk4XSxbIkxpc3QiLDAuNDA5MDgzNTcw
ODU0NTg2NDYsMC40MDkwODM1NzA4NTQ1ODY0Nl0sWyJMaXN0IiwwLjYwNzc3ODgzNTcwMTUyMDks
MC42MDc3Nzg4MzU3MDE1MjA5XSxbIkxpc3QiLDAuODAyNTc2NDg4MTg4NzYwNSwwLjgwMjU3NjQ4
ODE4ODc2MDVdLFsiTGlzdCIsMS4wMTM4ODQ2OTE1ODE2MTEsMS4wMTM4ODQ2OTE1ODE2MTFdLFsi
TGlzdCIsMS4yMTEwOTEyMDA5ODIxMTM4LDEuMjExMDkxMjAwOTgyMTEzOF0sWyJMaXN0IiwxLjQy
NDgwODI2MTI4ODIyNzYsMS40MjQ4MDgyNjEyODgyMjc2XSxbIkxpc3QiLDEuNjM0NjI3NzA5MjM0
NjQ2NCwxLjYzNDYyNzcwOTIzNDY0NjRdLFsiTGlzdCIsMS44MzAzNDU0NjMxODg3MTczLDEuODMw
MzQ1NDYzMTg4NzE3M10sWyJMaXN0IiwyLjA0MjU3Mzc2ODA0ODM5OTUsMi4wNDI1NzM3NjgwNDgz
OTk1XSxbIkxpc3QiLDIuMjQwNzAwMzc4OTE1NzM0LDIuMjQwNzAwMzc4OTE1NzM0XSxbIkxpc3Qi
LDIuNDM0OTI5Mzc3NDIzMzczLDIuNDM0OTI5Mzc3NDIzMzczXSxbIkxpc3QiLDIuNjQ1NjY4OTI2
ODM2NjIzLDIuNjQ1NjY4OTI2ODM2NjIzXSxbIkxpc3QiLDIuODQyMzA2NzgyMjU3NTI1LDIuODQy
MzA2NzgyMjU3NTI1XSxbIkxpc3QiLDMuMDU1NDU1MTg4NTg0MDM4NCwzLjA1NTQ1NTE4ODU4NDAz
ODRdLFsiTGlzdCIsMy4yNjQ3MDU5ODI1NTA4NTcsMy4yNjQ3MDU5ODI1NTA4NTddLFsiTGlzdCIs
My40NTk4NTUwODI1MjUzMjcsMy40NTk4NTUwODI1MjUzMjddLFsiTGlzdCIsMy42NzE1MTQ3MzM0
MDU0MDg2LDMuNjcxNTE0NzMzNDA1NDA4Nl0sWyJMaXN0IiwzLjg2OTA3MjY5MDI5MzE0MiwzLjg2
OTA3MjY5MDI5MzE0Ml0sWyJMaXN0Iiw0LjA4MzE0MTE5ODA4NjQ4Niw0LjA4MzE0MTE5ODA4NjQ4
Nl0sWyJMaXN0Iiw0LjI5MzMxMjA5MzUyMDEzNiw0LjI5MzMxMjA5MzUyMDEzNl0sWyJMaXN0Iiw0
LjQ4OTM4MTI5NDk2MTQzNyw0LjQ4OTM4MTI5NDk2MTQzN10sWyJMaXN0Iiw0LjcwMTk2MTA0NzMw
ODM1LDQuNzAxOTYxMDQ3MzA4MzVdLFsiTGlzdCIsNC45MDA0MzkxMDU2NjI5MTQsNC45MDA0Mzkx
MDU2NjI5MTRdLFsiTGlzdCIsNS4wOTUwMTk1NTE2NTc3ODQsNS4wOTUwMTk1NTE2NTc3ODRdLFsi
TGlzdCIsNS4zMDYxMTA1NDg1NTgyNjUsNS4zMDYxMTA1NDg1NTgyNjVdLFsiTGlzdCIsNS41MDMw
OTk4NTE0NjYzOTgsNS41MDMwOTk4NTE0NjYzOThdLFsiTGlzdCIsNS43MTY1OTk3MDUyODAxNDEs
NS43MTY1OTk3MDUyODAxNDFdLFsiTGlzdCIsNS45MjYyMDE5NDY3MzQxOSw1LjkyNjIwMTk0Njcz
NDE5XSxbIkxpc3QiLDYuMTIxNzAyNDk0MTk1ODkxLDYuMTIxNzAyNDk0MTk1ODkxXSxbIkxpc3Qi
LDYuMzMzNzEzNTkyNTYzMjAzLDYuMzMzNzEzNTkyNTYzMjAzXSxbIkxpc3QiLDYuNTMxNjIyOTk2
OTM4MTY4LDYuNTMxNjIyOTk2OTM4MTY4XSxbIkxpc3QiLDYuNzI1NjM0Nzg4OTUzNDM3LDYuNzI1
NjM0Nzg4OTUzNDM3XSxbIkxpc3QiLDYuOTM2MTU3MTMxODc0MzE3LDYuOTM2MTU3MTMxODc0MzE3
XSxbIkxpc3QiLDcuMTMyNTc3NzgwODAyODUsNy4xMzI1Nzc3ODA4MDI4NV0sWyJMaXN0Iiw3LjM0
NTUwODk4MDYzNjk5NCw3LjM0NTUwODk4MDYzNjk5NF0sWyJMaXN0Iiw3LjU0NDMzODQ4NjQ3ODc5
LDcuNTQ0MzM4NDg2NDc4NzldLFsiTGlzdCIsNy43MzkyNzAzNzk5NjA4OTE1LDcuNzM5MjcwMzc5
OTYwODkxNV0sWyJMaXN0Iiw3Ljk1MDcxMjgyNDM0ODYwNCw3Ljk1MDcxMjgyNDM0ODYwNF0sWyJM
aXN0Iiw4LjE0ODA1MzU3NDc0Mzk2OSw4LjE0ODA1MzU3NDc0Mzk2OV0sWyJMaXN0Iiw4LjM2MTkw
NDg3NjA0NDk0NCw4LjM2MTkwNDg3NjA0NDk0NF0sWyJMaXN0Iiw4LjU3MTg1ODU2NDk4NjIyNCw4
LjU3MTg1ODU2NDk4NjIyNF0sWyJMaXN0Iiw4Ljc2NzcxMDU1OTkzNTE1NSw4Ljc2NzcxMDU1OTkz
NTE1NV0sWyJMaXN0Iiw4Ljk4MDA3MzEwNTc4OTY5OCw4Ljk4MDA3MzEwNTc4OTY5OF0sWyJMaXN0
Iiw5LjE3ODMzMzk1NzY1MTg5NCw5LjE3ODMzMzk1NzY1MTg5NF0sWyJMaXN0Iiw5LjM3MjY5NzE5
NzE1NDM5NSw5LjM3MjY5NzE5NzE1NDM5NV0sWyJMaXN0Iiw5LjU4MzU3MDk4NzU2MjUwNiw5LjU4
MzU3MDk4NzU2MjUwNl0sWyJMaXN0Iiw5Ljc4MDM0MzA4Mzk3ODI3LDkuNzgwMzQzMDgzOTc4Mjdd
LFsiTGlzdCIsOS43ODM3NzUyMjAxMDIzMzUsOS43ODM3NzUyMjAxMDIzMzVdLFsiTGlzdCIsOS43
ODcyMDczNTYyMjYzOTgsOS43ODcyMDczNTYyMjYzOThdLFsiTGlzdCIsOS43OTQwNzE2Mjg0NzQ1
MjYsOS43OTQwNzE2Mjg0NzQ1MjZdLFsiTGlzdCIsOS44MDc4MDAxNzI5NzA3ODMsOS44MDc4MDAx
NzI5NzA3ODNdLFsiTGlzdCIsOS44MzUyNTcyNjE5NjMyOTQsOS44MzUyNTcyNjE5NjMyOTRdLFsi
TGlzdCIsOS44OTAxNzE0Mzk5NDgzMTgsOS44OTAxNzE0Mzk5NDgzMThdLFsiTGlzdCIsOS44OTM2
MDM1NzYwNzIzODMsOS44OTM2MDM1NzYwNzIzODNdLFsiTGlzdCIsOS44OTcwMzU3MTIxOTY0NDcs
OS44OTcwMzU3MTIxOTY0NDddLFsiTGlzdCIsOS45MDM4OTk5ODQ0NDQ1NzUsOS45MDM4OTk5ODQ0
NDQ1NzVdLFsiTGlzdCIsOS45MTc2Mjg1Mjg5NDA4MzEsOS45MTc2Mjg1Mjg5NDA4MzFdLFsiTGlz
dCIsOS45NDUwODU2MTc5MzMzNDIsOS45NDUwODU2MTc5MzMzNDJdLFsiTGlzdCIsOS45NDg1MTc3
NTQwNTc0MDYsOS45NDg1MTc3NTQwNTc0MDZdLFsiTGlzdCIsOS45NTE5NDk4OTAxODE0Nyw5Ljk1
MTk0OTg5MDE4MTQ3XSxbIkxpc3QiLDkuOTU4ODE0MTYyNDI5NTk3LDkuOTU4ODE0MTYyNDI5NTk3
XSxbIkxpc3QiLDkuOTcyNTQyNzA2OTI1ODU0LDkuOTcyNTQyNzA2OTI1ODU0XSxbIkxpc3QiLDku
OTc1OTc0ODQzMDQ5OTE5LDkuOTc1OTc0ODQzMDQ5OTE5XSxbIkxpc3QiLDkuOTc5NDA2OTc5MTcz
OTgyLDkuOTc5NDA2OTc5MTczOTgyXSxbIkxpc3QiLDkuOTg2MjcxMjUxNDIyMTEsOS45ODYyNzEy
NTE0MjIxMV0sWyJMaXN0Iiw5Ljk4OTcwMzM4NzU0NjE3NSw5Ljk4OTcwMzM4NzU0NjE3NV0sWyJM
aXN0Iiw5Ljk5MzEzNTUyMzY3MDIzOCw5Ljk5MzEzNTUyMzY3MDIzOF0sWyJMaXN0Iiw5Ljk5NjU2
NzY1OTc5NDMwMiw5Ljk5NjU2NzY1OTc5NDMwMl0sWyJMaXN0Iiw5Ljk5OTk5OTc5NTkxODM2Nyw5
Ljk5OTk5OTc5NTkxODM2N11dXV0sIidDaGFydGluZ2BQcml2YXRlYFRhZyMxJyJdXV0sWyJMaXN0
Il1dLFsiQXNzb2NpYXRpb24iLFsiUnVsZSIsIidIaWdobGlnaHRFbGVtZW50cyciLFsiQXNzb2Np
YXRpb24iLFsiUnVsZSIsIidMYWJlbCciLFsiTGlzdCIsIidYWUxhYmVsJyJdXSxbIlJ1bGUiLCIn
QmFsbCciLFsiTGlzdCIsIidJbnRlcnBvbGF0ZWRCYWxsJyJdXV1dLFsiUnVsZSIsIidMYXlvdXRP
cHRpb25zJyIsWyJBc3NvY2lhdGlvbiIsWyJSdWxlIiwiJ1BhbmVsUGxvdExheW91dCciLFsiQXNz
b2NpYXRpb24iXV0sWyJSdWxlIiwiJ1Bsb3RSYW5nZSciLFsiTGlzdCIsWyJMaXN0IiwwLDEwXSxb
Ikxpc3QiLDAuMCw5Ljk5OTk5OTc5NTkxODM2N11dXSxbIlJ1bGUiLCInRnJhbWUnIixbIkxpc3Qi
LFsiTGlzdCIsZmFsc2UsZmFsc2VdLFsiTGlzdCIsZmFsc2UsZmFsc2VdXV0sWyJSdWxlIiwiJ0F4
ZXNPcmlnaW4nIixbIkxpc3QiLDAsMF1dLFsiUnVsZSIsIidJbWFnZVNpemUnIixbIkxpc3QiLDM2
MCxbIlRpbWVzIiwzNjAsWyJQb3dlciIsIkdvbGRlblJhdGlvIiwtMV1dXV0sWyJSdWxlIiwiJ0F4
ZXMnIixbIkxpc3QiLHRydWUsdHJ1ZV1dLFsiUnVsZSIsIidMYWJlbFN0eWxlJyIsWyJMaXN0Il1d
LFsiUnVsZSIsIidBc3BlY3RSYXRpbyciLFsiUG93ZXIiLCJHb2xkZW5SYXRpbyIsLTFdXSxbIlJ1
bGUiLCInRGVmYXVsdFN0eWxlJyIsWyJMaXN0IixbIkRpcmVjdGl2ZSIsWyJPcGFjaXR5IiwxLjBd
LFsiUkdCQ29sb3IiLDAuMzY4NDE3LDAuNTA2Nzc5LDAuNzA5Nzk4XSxbIkFic29sdXRlVGhpY2tu
ZXNzIiwyXV1dXSxbIlJ1bGUiLCInSGlnaGxpZ2h0TGFiZWxpbmdGdW5jdGlvbnMnIixbIkFzc29j
aWF0aW9uIixbIlJ1bGUiLCInQ29vcmRpbmF0ZXNUb29sT3B0aW9ucyciLFsiRnVuY3Rpb24iLFsi
TGlzdCIsWyJJZGVudGl0eSIsWyJQYXJ0IixbIlNsb3QiLDFdLDFdXSxbIklkZW50aXR5IixbIlBh
cnQiLFsiU2xvdCIsMV0sMl1dXV1dLFsiUnVsZSIsIidTY2FsaW5nRnVuY3Rpb25zJyIsWyJMaXN0
IixbIkxpc3QiLCJJZGVudGl0eSIsIklkZW50aXR5Il0sWyJMaXN0IiwiSWRlbnRpdHkiLCJJZGVu
dGl0eSJdXV1dXSxbIlJ1bGUiLCInUHJpbWl0aXZlcyciLFsiTGlzdCJdXSxbIlJ1bGUiLCInR0NG
bGFnJyIsZmFsc2VdXV0sWyJSdWxlIiwiJ01ldGEnIixbIkFzc29jaWF0aW9uIixbIlJ1bGUiLCIn
RGVmYXVsdEhpZ2hsaWdodCciLFsiTGlzdCIsIidEeW5hbWljJyIsIk5vbmUiXV0sWyJSdWxlIiwi
J0luZGV4JyIsWyJMaXN0Il1dLFsiUnVsZSIsIidGdW5jdGlvbiciLCJQbG90Il0sWyJSdWxlIiwi
J0dyb3VwSGlnaGxpZ2h0JyIsZmFsc2VdXV1dLCInRHluYW1pY0hpZ2hsaWdodCciXSxbIkxpc3Qi
LFsiUnVsZSIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5Il0sWyJSdWxlIiwiRGlzcGxheUZ1
bmN0aW9uIiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJUaWNrcyIsWyJMaXN0IiwiQXV0b21hdGljIiwi
QXV0b21hdGljIl1dLFsiUnVsZSIsIkF4ZXNPcmlnaW4iLFsiTGlzdCIsMCwwXV0sWyJSdWxlIiwi
RnJhbWVUaWNrcyIsWyJMaXN0IixbIkxpc3QiLCJBdXRvbWF0aWMiLCJBdXRvbWF0aWMiXSxbIkxp
c3QiLCJBdXRvbWF0aWMiLCJBdXRvbWF0aWMiXV1dLFsiUnVsZSIsIkdyaWRMaW5lcyIsWyJMaXN0
IiwiTm9uZSIsIk5vbmUiXV0sWyJSdWxlIiwiRGlzcGxheUZ1bmN0aW9uIiwiSWRlbnRpdHkiXSxb
IlJ1bGUiLCJQbG90UmFuZ2VQYWRkaW5nIixbIkxpc3QiLFsiTGlzdCIsWyJTY2FsZWQiLDIuMGUt
Ml0sWyJTY2FsZWQiLDIuMGUtMl1dLFsiTGlzdCIsWyJTY2FsZWQiLDUuMGUtMl0sWyJTY2FsZWQi
LDUuMGUtMl1dXV0sWyJSdWxlIiwiUGxvdFJhbmdlQ2xpcHBpbmciLHRydWVdLFsiUnVsZSIsIklt
YWdlUGFkZGluZyIsIkFsbCJdLFsiUnVsZSIsIkRpc3BsYXlGdW5jdGlvbiIsIklkZW50aXR5Il0s
WyJSdWxlIiwiQXNwZWN0UmF0aW8iLFsiUG93ZXIiLCJHb2xkZW5SYXRpbyIsLTFdXSxbIlJ1bGUi
LCJBeGVzIixbIkxpc3QiLHRydWUsdHJ1ZV1dLFsiUnVsZSIsIkF4ZXNMYWJlbCIsWyJMaXN0Iiwi
Tm9uZSIsIk5vbmUiXV0sWyJSdWxlIiwiQXhlc09yaWdpbiIsWyJMaXN0IiwwLDBdXSxbIlJ1bGVE
ZWxheWVkIiwiRGlzcGxheUZ1bmN0aW9uIiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJFcGlsb2ciLFsi
TGlzdCIsWyJJbnNldCIsWyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwxLDAuODUsMC44
NV0sWyJEaXNrIixbIkxpc3QiLDAsMF0sMC4xXSxbIkdyYXlMZXZlbCIsMF0sWyJEaXJlY3RpdmUi
LFsiUnVsZSIsIkZvbnRTaXplIiwxNl1dLFsiVGV4dCIsIidUZXN0JyIsWyJMaXN0IixbIlJhdGlv
bmFsIiwtMSwxNl0sWyJSYXRpb25hbCIsLTEsMzBdXV1dLFsiUnVsZSIsIkltYWdlU2l6ZSIsMzUw
XSxbIlJ1bGUiLCJQbG90UmFuZ2UiLFsiTGlzdCIsWyJMaXN0IiwtMSwxXSxbIkxpc3QiLC0xLDFd
XV1dXV1dLFsiUnVsZSIsIkZyYW1lIixbIkxpc3QiLFsiTGlzdCIsZmFsc2UsZmFsc2VdLFsiTGlz
dCIsZmFsc2UsZmFsc2VdXV0sWyJSdWxlIiwiRnJhbWVMYWJlbCIsWyJMaXN0IixbIkxpc3QiLCJO
b25lIiwiTm9uZSJdLFsiTGlzdCIsIk5vbmUiLCJOb25lIl1dXSxbIlJ1bGUiLCJGcmFtZVRpY2tz
IixbIkxpc3QiLFsiTGlzdCIsIkF1dG9tYXRpYyIsIkF1dG9tYXRpYyJdLFsiTGlzdCIsIkF1dG9t
YXRpYyIsIkF1dG9tYXRpYyJdXV0sWyJSdWxlIiwiR3JpZExpbmVzIixbIkxpc3QiLCJOb25lIiwi
Tm9uZSJdXSxbIlJ1bGUiLCJHcmlkTGluZXNTdHlsZSIsWyJEaXJlY3RpdmUiLFsiR3JheUxldmVs
IiwwLjUsMC40XV1dLFsiUnVsZSIsIk1ldGhvZCIsWyJMaXN0IixbIlJ1bGUiLCInRGVmYXVsdEJv
dW5kYXJ5U3R5bGUnIiwiQXV0b21hdGljIl0sWyJSdWxlIiwiJ0RlZmF1bHRHcmFwaGljc0ludGVy
YWN0aW9uJyIsWyJMaXN0IixbIlJ1bGUiLCInVmVyc2lvbiciLDEuMl0sWyJSdWxlIiwiJ1RyYWNr
TW91c2VQb3NpdGlvbiciLFsiTGlzdCIsdHJ1ZSxmYWxzZV1dLFsiUnVsZSIsIidFZmZlY3RzJyIs
WyJMaXN0IixbIlJ1bGUiLCInSGlnaGxpZ2h0JyIsWyJMaXN0IixbIlJ1bGUiLCIncmF0aW8nIiwy
XV1dLFsiUnVsZSIsIidIaWdobGlnaHRQb2ludCciLFsiTGlzdCIsWyJSdWxlIiwiJ3JhdGlvJyIs
Ml1dXSxbIlJ1bGUiLCInRHJvcGxpbmVzJyIsWyJMaXN0IixbIlJ1bGUiLCInZnJlZWZvcm1DdXJz
b3JNb2RlJyIsdHJ1ZV0sWyJSdWxlIiwiJ3BsYWNlbWVudCciLFsiTGlzdCIsWyJSdWxlIiwiJ3gn
IiwiJ0FsbCciXSxbIlJ1bGUiLCIneSciLCInTm9uZSciXV1dXV1dXV1dLFsiUnVsZSIsIidEZWZh
dWx0TWVzaFN0eWxlJyIsWyJBYnNvbHV0ZVBvaW50U2l6ZSIsNl1dLFsiUnVsZSIsIidTY2FsaW5n
RnVuY3Rpb25zJyIsIk5vbmUiXSxbIlJ1bGUiLCInQ29vcmRpbmF0ZXNUb29sT3B0aW9ucyciLFsi
TGlzdCIsWyJSdWxlIiwiJ0Rpc3BsYXlGdW5jdGlvbiciLFsiRnVuY3Rpb24iLFsiTGlzdCIsW1si
RnVuY3Rpb24iLFsiSWRlbnRpdHkiLFsiU2xvdCIsMV1dXSxbIlBhcnQiLFsiU2xvdCIsMV0sMV1d
LFtbIkZ1bmN0aW9uIixbIklkZW50aXR5IixbIlNsb3QiLDFdXV0sWyJQYXJ0IixbIlNsb3QiLDFd
LDJdXV1dXSxbIlJ1bGUiLCInQ29waWVkVmFsdWVGdW5jdGlvbiciLFsiRnVuY3Rpb24iLFsiTGlz
dCIsW1siRnVuY3Rpb24iLFsiSWRlbnRpdHkiLFsiU2xvdCIsMV1dXSxbIlBhcnQiLFsiU2xvdCIs
MV0sMV1dLFtbIkZ1bmN0aW9uIixbIklkZW50aXR5IixbIlNsb3QiLDFdXV0sWyJQYXJ0IixbIlNs
b3QiLDFdLDJdXV1dXV1dXV0sWyJSdWxlIiwiUGxvdFJhbmdlIixbIkxpc3QiLFsiTGlzdCIsMCwx
MF0sWyJMaXN0IiwwLjAsOS45OTk5OTk3OTU5MTgzNjddXV0sWyJSdWxlIiwiUGxvdFJhbmdlQ2xp
cHBpbmciLHRydWVdLFsiUnVsZSIsIlBsb3RSYW5nZVBhZGRpbmciLFsiTGlzdCIsWyJMaXN0Iixb
IlNjYWxlZCIsMi4wZS0yXSxbIlNjYWxlZCIsMi4wZS0yXV0sWyJMaXN0IixbIlNjYWxlZCIsMi4w
ZS0yXSxbIlNjYWxlZCIsMi4wZS0yXV1dXSxbIlJ1bGUiLCJUaWNrcyIsWyJMaXN0IiwiQXV0b21h
dGljIiwiQXV0b21hdGljIl1dXV0=
`}>{`Plot[x, {x,0,10}, Epilog->{Inset[Graphics[{LightRed,Disk[{0,0},0.1],Black, Directive[FontSize->16], Text["Test", {-1/16,-1/30}]}, ImageSize->350, PlotRange->{{-1,1}, {-1,1}}]]}]`}</Wl>

## Dynamics
The second arguments `pos` that specifies the position of an inset does support dynamic updates, i.e. try

```mathematica
inset = Graphics[{
  LightRed,
  Disk[{-1-0.13,0.9},0.1],
  Black, Directive[FontSize->16], Text["Test", {-1/16 - 1 - 0.13,-1/30 + 0.9}]
}, PlotRange->{{-1,1}, {-1,1}}];

pts = {0,0};

Plot[x, {x,0,10}, Epilog->{Inset[inset, pts // Offload]}]
```

and then

```mathematica
Do[pts = {i,i}; Pause[0.1];, {i, 0, 10, 0.5}]
```

