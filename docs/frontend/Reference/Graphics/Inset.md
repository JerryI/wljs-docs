---
env:
  - WLJS
update: true
needsContainer: false
origin: https://github.com/JerryI/wljs-graphics-d3/
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

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkxpc3QiLFsiTGlzdCIsWyJMaXN0Il0sWyJMaXN0Il0sWyJB
bm5vdGF0aW9uIixbIkxpc3QiLFsiRGlyZWN0aXZlIixbIk9wYWNpdHkiLDEuMF0sWyJSR0JDb2xv
ciIsMC4zNjg0MTcsMC41MDY3NzksMC43MDk3OThdLFsiQWJzb2x1dGVUaGlja25lc3MiLDEuNl1d
LFsiTGluZSIsWyJMaXN0IixbIkxpc3QiLDIuMDQwODE2MzI2NTMwNjEyMWUtNywyLjA0MDgxNjMy
NjUzMDYxMjFlLTddLFsiTGlzdCIsMy4wNjcxNzkyMDU1OTYyNjdlLTMsMy4wNjcxNzkyMDU1OTYy
NjdlLTNdLFsiTGlzdCIsNi4xMzQxNTQzMjk1NTk4ODFlLTMsNi4xMzQxNTQzMjk1NTk4ODFlLTNd
LFsiTGlzdCIsMS4yMjY4MTA0NTc3NDg3MTFlLTIsMS4yMjY4MTA0NTc3NDg3MTFlLTJdLFsiTGlz
dCIsMi40NTM2MDA1MDczMzQxNTdlLTIsMi40NTM2MDA1MDczMzQxNTdlLTJdLFsiTGlzdCIsNC45
MDcxODA2MDY1MDUwNDhlLTIsNC45MDcxODA2MDY1MDUwNDhlLTJdLFsiTGlzdCIsOS44MTQzNDA4
MDQ4NDY4MzFlLTIsOS44MTQzNDA4MDQ4NDY4MzFlLTJdLFsiTGlzdCIsMC4xOTYyODY2MTIwMTUz
MDM5OCwwLjE5NjI4NjYxMjAxNTMwMzk4XSxbIkxpc3QiLDAuNDA5MDgzNTcwODU0NTg2NDYsMC40
MDkwODM1NzA4NTQ1ODY0Nl0sWyJMaXN0IiwwLjYwNzc3ODgzNTcwMTUyMDksMC42MDc3Nzg4MzU3
MDE1MjA5XSxbIkxpc3QiLDAuODAyNTc2NDg4MTg4NzYwNSwwLjgwMjU3NjQ4ODE4ODc2MDVdLFsi
TGlzdCIsMS4wMTM4ODQ2OTE1ODE2MTEsMS4wMTM4ODQ2OTE1ODE2MTFdLFsiTGlzdCIsMS4yMTEw
OTEyMDA5ODIxMTM4LDEuMjExMDkxMjAwOTgyMTEzOF0sWyJMaXN0IiwxLjQyNDgwODI2MTI4ODIy
NzYsMS40MjQ4MDgyNjEyODgyMjc2XSxbIkxpc3QiLDEuNjM0NjI3NzA5MjM0NjQ2NCwxLjYzNDYy
NzcwOTIzNDY0NjRdLFsiTGlzdCIsMS44MzAzNDU0NjMxODg3MTczLDEuODMwMzQ1NDYzMTg4NzE3
M10sWyJMaXN0IiwyLjA0MjU3Mzc2ODA0ODM5OTUsMi4wNDI1NzM3NjgwNDgzOTk1XSxbIkxpc3Qi
LDIuMjQwNzAwMzc4OTE1NzM0LDIuMjQwNzAwMzc4OTE1NzM0XSxbIkxpc3QiLDIuNDM0OTI5Mzc3
NDIzMzczLDIuNDM0OTI5Mzc3NDIzMzczXSxbIkxpc3QiLDIuNjQ1NjY4OTI2ODM2NjIzLDIuNjQ1
NjY4OTI2ODM2NjIzXSxbIkxpc3QiLDIuODQyMzA2NzgyMjU3NTI1LDIuODQyMzA2NzgyMjU3NTI1
XSxbIkxpc3QiLDMuMDU1NDU1MTg4NTg0MDM4NCwzLjA1NTQ1NTE4ODU4NDAzODRdLFsiTGlzdCIs
My4yNjQ3MDU5ODI1NTA4NTcsMy4yNjQ3MDU5ODI1NTA4NTddLFsiTGlzdCIsMy40NTk4NTUwODI1
MjUzMjcsMy40NTk4NTUwODI1MjUzMjddLFsiTGlzdCIsMy42NzE1MTQ3MzM0MDU0MDg2LDMuNjcx
NTE0NzMzNDA1NDA4Nl0sWyJMaXN0IiwzLjg2OTA3MjY5MDI5MzE0MiwzLjg2OTA3MjY5MDI5MzE0
Ml0sWyJMaXN0Iiw0LjA4MzE0MTE5ODA4NjQ4Niw0LjA4MzE0MTE5ODA4NjQ4Nl0sWyJMaXN0Iiw0
LjI5MzMxMjA5MzUyMDEzNiw0LjI5MzMxMjA5MzUyMDEzNl0sWyJMaXN0Iiw0LjQ4OTM4MTI5NDk2
MTQzNyw0LjQ4OTM4MTI5NDk2MTQzN10sWyJMaXN0Iiw0LjcwMTk2MTA0NzMwODM1LDQuNzAxOTYx
MDQ3MzA4MzVdLFsiTGlzdCIsNC45MDA0MzkxMDU2NjI5MTQsNC45MDA0MzkxMDU2NjI5MTRdLFsi
TGlzdCIsNS4wOTUwMTk1NTE2NTc3ODQsNS4wOTUwMTk1NTE2NTc3ODRdLFsiTGlzdCIsNS4zMDYx
MTA1NDg1NTgyNjUsNS4zMDYxMTA1NDg1NTgyNjVdLFsiTGlzdCIsNS41MDMwOTk4NTE0NjYzOTgs
NS41MDMwOTk4NTE0NjYzOThdLFsiTGlzdCIsNS43MTY1OTk3MDUyODAxNDEsNS43MTY1OTk3MDUy
ODAxNDFdLFsiTGlzdCIsNS45MjYyMDE5NDY3MzQxOSw1LjkyNjIwMTk0NjczNDE5XSxbIkxpc3Qi
LDYuMTIxNzAyNDk0MTk1ODkxLDYuMTIxNzAyNDk0MTk1ODkxXSxbIkxpc3QiLDYuMzMzNzEzNTky
NTYzMjAzLDYuMzMzNzEzNTkyNTYzMjAzXSxbIkxpc3QiLDYuNTMxNjIyOTk2OTM4MTY4LDYuNTMx
NjIyOTk2OTM4MTY4XSxbIkxpc3QiLDYuNzI1NjM0Nzg4OTUzNDM3LDYuNzI1NjM0Nzg4OTUzNDM3
XSxbIkxpc3QiLDYuOTM2MTU3MTMxODc0MzE3LDYuOTM2MTU3MTMxODc0MzE3XSxbIkxpc3QiLDcu
MTMyNTc3NzgwODAyODUsNy4xMzI1Nzc3ODA4MDI4NV0sWyJMaXN0Iiw3LjM0NTUwODk4MDYzNjk5
NCw3LjM0NTUwODk4MDYzNjk5NF0sWyJMaXN0Iiw3LjU0NDMzODQ4NjQ3ODc5LDcuNTQ0MzM4NDg2
NDc4NzldLFsiTGlzdCIsNy43MzkyNzAzNzk5NjA4OTE1LDcuNzM5MjcwMzc5OTYwODkxNV0sWyJM
aXN0Iiw3Ljk1MDcxMjgyNDM0ODYwNCw3Ljk1MDcxMjgyNDM0ODYwNF0sWyJMaXN0Iiw4LjE0ODA1
MzU3NDc0Mzk2OSw4LjE0ODA1MzU3NDc0Mzk2OV0sWyJMaXN0Iiw4LjM2MTkwNDg3NjA0NDk0NCw4
LjM2MTkwNDg3NjA0NDk0NF0sWyJMaXN0Iiw4LjU3MTg1ODU2NDk4NjIyNCw4LjU3MTg1ODU2NDk4
NjIyNF0sWyJMaXN0Iiw4Ljc2NzcxMDU1OTkzNTE1NSw4Ljc2NzcxMDU1OTkzNTE1NV0sWyJMaXN0
Iiw4Ljk4MDA3MzEwNTc4OTY5OCw4Ljk4MDA3MzEwNTc4OTY5OF0sWyJMaXN0Iiw5LjE3ODMzMzk1
NzY1MTg5NCw5LjE3ODMzMzk1NzY1MTg5NF0sWyJMaXN0Iiw5LjM3MjY5NzE5NzE1NDM5NSw5LjM3
MjY5NzE5NzE1NDM5NV0sWyJMaXN0Iiw5LjU4MzU3MDk4NzU2MjUwNiw5LjU4MzU3MDk4NzU2MjUw
Nl0sWyJMaXN0Iiw5Ljc4MDM0MzA4Mzk3ODI3LDkuNzgwMzQzMDgzOTc4MjddLFsiTGlzdCIsOS43
ODM3NzUyMjAxMDIzMzUsOS43ODM3NzUyMjAxMDIzMzVdLFsiTGlzdCIsOS43ODcyMDczNTYyMjYz
OTgsOS43ODcyMDczNTYyMjYzOThdLFsiTGlzdCIsOS43OTQwNzE2Mjg0NzQ1MjYsOS43OTQwNzE2
Mjg0NzQ1MjZdLFsiTGlzdCIsOS44MDc4MDAxNzI5NzA3ODMsOS44MDc4MDAxNzI5NzA3ODNdLFsi
TGlzdCIsOS44MzUyNTcyNjE5NjMyOTQsOS44MzUyNTcyNjE5NjMyOTRdLFsiTGlzdCIsOS44OTAx
NzE0Mzk5NDgzMTgsOS44OTAxNzE0Mzk5NDgzMThdLFsiTGlzdCIsOS44OTM2MDM1NzYwNzIzODMs
OS44OTM2MDM1NzYwNzIzODNdLFsiTGlzdCIsOS44OTcwMzU3MTIxOTY0NDcsOS44OTcwMzU3MTIx
OTY0NDddLFsiTGlzdCIsOS45MDM4OTk5ODQ0NDQ1NzUsOS45MDM4OTk5ODQ0NDQ1NzVdLFsiTGlz
dCIsOS45MTc2Mjg1Mjg5NDA4MzEsOS45MTc2Mjg1Mjg5NDA4MzFdLFsiTGlzdCIsOS45NDUwODU2
MTc5MzMzNDIsOS45NDUwODU2MTc5MzMzNDJdLFsiTGlzdCIsOS45NDg1MTc3NTQwNTc0MDYsOS45
NDg1MTc3NTQwNTc0MDZdLFsiTGlzdCIsOS45NTE5NDk4OTAxODE0Nyw5Ljk1MTk0OTg5MDE4MTQ3
XSxbIkxpc3QiLDkuOTU4ODE0MTYyNDI5NTk3LDkuOTU4ODE0MTYyNDI5NTk3XSxbIkxpc3QiLDku
OTcyNTQyNzA2OTI1ODU0LDkuOTcyNTQyNzA2OTI1ODU0XSxbIkxpc3QiLDkuOTc1OTc0ODQzMDQ5
OTE5LDkuOTc1OTc0ODQzMDQ5OTE5XSxbIkxpc3QiLDkuOTc5NDA2OTc5MTczOTgyLDkuOTc5NDA2
OTc5MTczOTgyXSxbIkxpc3QiLDkuOTg2MjcxMjUxNDIyMTEsOS45ODYyNzEyNTE0MjIxMV0sWyJM
aXN0Iiw5Ljk4OTcwMzM4NzU0NjE3NSw5Ljk4OTcwMzM4NzU0NjE3NV0sWyJMaXN0Iiw5Ljk5MzEz
NTUyMzY3MDIzOCw5Ljk5MzEzNTUyMzY3MDIzOF0sWyJMaXN0Iiw5Ljk5NjU2NzY1OTc5NDMwMiw5
Ljk5NjU2NzY1OTc5NDMwMl0sWyJMaXN0Iiw5Ljk5OTk5OTc5NTkxODM2Nyw5Ljk5OTk5OTc5NTkx
ODM2N11dXV0sIidDaGFydGluZ2BQcml2YXRlYFRhZyQ5MTc1IzEnIl1dXSxbIkxpc3QiXV0sWyJM
aXN0IixbIlJ1bGUiLCJEaXNwbGF5RnVuY3Rpb24iLCJJZGVudGl0eSJdLFsiUnVsZSIsIlRpY2tz
IixbIkxpc3QiLCJBdXRvbWF0aWMiLCJBdXRvbWF0aWMiXV0sWyJSdWxlIiwiQXhlc09yaWdpbiIs
WyJMaXN0IiwwLDBdXSxbIlJ1bGUiLCJGcmFtZVRpY2tzIixbIkxpc3QiLFsiTGlzdCIsIkF1dG9t
YXRpYyIsIkF1dG9tYXRpYyJdLFsiTGlzdCIsIkF1dG9tYXRpYyIsIkF1dG9tYXRpYyJdXV0sWyJS
dWxlIiwiR3JpZExpbmVzIixbIkxpc3QiLCJOb25lIiwiTm9uZSJdXSxbIlJ1bGUiLCJEaXNwbGF5
RnVuY3Rpb24iLCJJZGVudGl0eSJdLFsiUnVsZSIsIlBsb3RSYW5nZVBhZGRpbmciLFsiTGlzdCIs
WyJMaXN0IixbIlNjYWxlZCIsMi4wZS0yXSxbIlNjYWxlZCIsMi4wZS0yXV0sWyJMaXN0IixbIlNj
YWxlZCIsNS4wZS0yXSxbIlNjYWxlZCIsNS4wZS0yXV1dXSxbIlJ1bGUiLCJQbG90UmFuZ2VDbGlw
cGluZyIsdHJ1ZV0sWyJSdWxlIiwiSW1hZ2VQYWRkaW5nIiwiQWxsIl0sWyJSdWxlIiwiRGlzcGxh
eUZ1bmN0aW9uIiwiSWRlbnRpdHkiXSxbIlJ1bGUiLCJBc3BlY3RSYXRpbyIsWyJQb3dlciIsIkdv
bGRlblJhdGlvIiwtMV1dLFsiUnVsZSIsIkF4ZXMiLFsiTGlzdCIsdHJ1ZSx0cnVlXV0sWyJSdWxl
IiwiQXhlc0xhYmVsIixbIkxpc3QiLCJOb25lIiwiTm9uZSJdXSxbIlJ1bGUiLCJBeGVzT3JpZ2lu
IixbIkxpc3QiLDAsMF1dLFsiUnVsZURlbGF5ZWQiLCJEaXNwbGF5RnVuY3Rpb24iLCJJZGVudGl0
eSJdLFsiUnVsZSIsIkVwaWxvZyIsWyJMaXN0IixbIkluc2V0IixbIkdyYXBoaWNzIixbIkxpc3Qi
LFsiUkdCQ29sb3IiLDEsMC44NSwwLjg1XSxbIkRpc2siLFsiTGlzdCIsMCwwXSwwLjFdLFsiR3Jh
eUxldmVsIiwwXSxbIkRpcmVjdGl2ZSIsWyJSdWxlIiwiRm9udFNpemUiLDE2XV0sWyJUZXh0Iiwi
J1Rlc3QnIixbIkxpc3QiLFsiUmF0aW9uYWwiLC0xLDE2XSxbIlJhdGlvbmFsIiwtMSwzMF1dXV0s
WyJSdWxlIiwiSW1hZ2VTaXplIiwzNTBdLFsiUnVsZSIsIlBsb3RSYW5nZSIsWyJMaXN0IixbIkxp
c3QiLC0xLDFdLFsiTGlzdCIsLTEsMV1dXV1dXV0sWyJSdWxlIiwiRnJhbWUiLFsiTGlzdCIsWyJM
aXN0IixmYWxzZSxmYWxzZV0sWyJMaXN0IixmYWxzZSxmYWxzZV1dXSxbIlJ1bGUiLCJGcmFtZUxh
YmVsIixbIkxpc3QiLFsiTGlzdCIsIk5vbmUiLCJOb25lIl0sWyJMaXN0IiwiTm9uZSIsIk5vbmUi
XV1dLFsiUnVsZSIsIkZyYW1lVGlja3MiLFsiTGlzdCIsWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0
b21hdGljIl0sWyJMaXN0IiwiQXV0b21hdGljIiwiQXV0b21hdGljIl1dXSxbIlJ1bGUiLCJHcmlk
TGluZXMiLFsiTGlzdCIsIk5vbmUiLCJOb25lIl1dLFsiUnVsZSIsIkdyaWRMaW5lc1N0eWxlIixb
IkRpcmVjdGl2ZSIsWyJHcmF5TGV2ZWwiLDAuNSwwLjRdXV0sWyJSdWxlIiwiTWV0aG9kIixbIkxp
c3QiLFsiUnVsZSIsIidEZWZhdWx0Qm91bmRhcnlTdHlsZSciLCJBdXRvbWF0aWMiXSxbIlJ1bGUi
LCInRGVmYXVsdEdyYXBoaWNzSW50ZXJhY3Rpb24nIixbIkxpc3QiLFsiUnVsZSIsIidWZXJzaW9u
JyIsMS4yXSxbIlJ1bGUiLCInVHJhY2tNb3VzZVBvc2l0aW9uJyIsWyJMaXN0Iix0cnVlLGZhbHNl
XV0sWyJSdWxlIiwiJ0VmZmVjdHMnIixbIkxpc3QiLFsiUnVsZSIsIidIaWdobGlnaHQnIixbIkxp
c3QiLFsiUnVsZSIsIidyYXRpbyciLDJdXV0sWyJSdWxlIiwiJ0hpZ2hsaWdodFBvaW50JyIsWyJM
aXN0IixbIlJ1bGUiLCIncmF0aW8nIiwyXV1dLFsiUnVsZSIsIidEcm9wbGluZXMnIixbIkxpc3Qi
LFsiUnVsZSIsIidmcmVlZm9ybUN1cnNvck1vZGUnIix0cnVlXSxbIlJ1bGUiLCIncGxhY2VtZW50
JyIsWyJMaXN0IixbIlJ1bGUiLCIneCciLCInQWxsJyJdLFsiUnVsZSIsIid5JyIsIidOb25lJyJd
XV1dXV1dXV0sWyJSdWxlIiwiJ0RlZmF1bHRNZXNoU3R5bGUnIixbIkFic29sdXRlUG9pbnRTaXpl
Iiw2XV0sWyJSdWxlIiwiJ1NjYWxpbmdGdW5jdGlvbnMnIiwiTm9uZSJdLFsiUnVsZSIsIidDb29y
ZGluYXRlc1Rvb2xPcHRpb25zJyIsWyJMaXN0IixbIlJ1bGUiLCInRGlzcGxheUZ1bmN0aW9uJyIs
WyJGdW5jdGlvbiIsWyJMaXN0IixbWyJGdW5jdGlvbiIsWyJJZGVudGl0eSIsWyJTbG90IiwxXV1d
LFsiUGFydCIsWyJTbG90IiwxXSwxXV0sW1siRnVuY3Rpb24iLFsiSWRlbnRpdHkiLFsiU2xvdCIs
MV1dXSxbIlBhcnQiLFsiU2xvdCIsMV0sMl1dXV1dLFsiUnVsZSIsIidDb3BpZWRWYWx1ZUZ1bmN0
aW9uJyIsWyJGdW5jdGlvbiIsWyJMaXN0IixbWyJGdW5jdGlvbiIsWyJJZGVudGl0eSIsWyJTbG90
IiwxXV1dLFsiUGFydCIsWyJTbG90IiwxXSwxXV0sW1siRnVuY3Rpb24iLFsiSWRlbnRpdHkiLFsi
U2xvdCIsMV1dXSxbIlBhcnQiLFsiU2xvdCIsMV0sMl1dXV1dXV1dXSxbIlJ1bGUiLCJQbG90UmFu
Z2UiLFsiTGlzdCIsWyJMaXN0IiwwLDEwXSxbIkxpc3QiLDAuMCw5Ljk5OTk5OTc5NTkxODM2N11d
XSxbIlJ1bGUiLCJQbG90UmFuZ2VDbGlwcGluZyIsdHJ1ZV0sWyJSdWxlIiwiUGxvdFJhbmdlUGFk
ZGluZyIsWyJMaXN0IixbIkxpc3QiLFsiU2NhbGVkIiwyLjBlLTJdLFsiU2NhbGVkIiwyLjBlLTJd
XSxbIkxpc3QiLFsiU2NhbGVkIiwyLjBlLTJdLFsiU2NhbGVkIiwyLjBlLTJdXV1dLFsiUnVsZSIs
IlRpY2tzIixbIkxpc3QiLCJBdXRvbWF0aWMiLCJBdXRvbWF0aWMiXV1dXQ==
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

