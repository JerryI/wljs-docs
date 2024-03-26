---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
draws a filled [Circle](Circle.md)

```mathematica
Disk[{x_, y_}, r_]
```

or

```mathematica
Disk[{x_,y_}, r_, {start_, finish_}]
```

where `start` and `finish` are corresponding angles of a sector (used to make pie diagrams)

for example

```mathematica
Graphics[Table[Disk[RandomReal[{-1,1}, 2], 1], {i,10}]]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkRpc2siLFsiTGlzdCIsLTAuODI1NzEwNDA1OTg1MDI2OSww
Ljg4NTAxNDkwNTcxODI2OTddLDFdLFsiRGlzayIsWyJMaXN0Iiw3Ljc1Mjk0NTMzMDIzODAyNmUt
MiwwLjQ2NzcyMTY5NTAyOTAxMTczXSwxXSxbIkRpc2siLFsiTGlzdCIsMC40MTY0ODgzNTI1NjY5
NzA1LDAuODc5MjQyNDYzMTg4NDY5XSwxXSxbIkRpc2siLFsiTGlzdCIsMC43Mjk1NjI4OTg1MTk5
MDc0LDAuNzU3Mzk3OTcwODIzODc1Ml0sMV0sWyJEaXNrIixbIkxpc3QiLDAuMjA1MTk0NjIzNjA3
NTU5NDcsLTAuMjgxMTUyMDgwNjU4MjIwNl0sMV0sWyJEaXNrIixbIkxpc3QiLC0wLjY0ODUzMzE0
MzU4MTk3MDgsMC41NDc2MDU1NjA5Mzc2OTcxXSwxXSxbIkRpc2siLFsiTGlzdCIsLTAuMjgwNTY5
NzkzODI1ODQyNywtNC45ODg3NjI2ODU4OTMwNTU2ZS0yXSwxXSxbIkRpc2siLFsiTGlzdCIsMC4x
NTk5ODc1MTQxMjUxMTE0NywtMC4zNzYyMzE3NTQwMzAwNDQ0XSwxXSxbIkRpc2siLFsiTGlzdCIs
MC42MzU1ODkzMzkyMzY0OTU3LDAuNTI2NzcxMzQwMTYwMjI4NV0sMV0sWyJEaXNrIixbIkxpc3Qi
LDAuNTkwMDI2NDAyNjU3NTM1MywxLjA3NzUzNzQwMjY4MTUwNTRlLTJdLDFdXV0=
`}>{`Graphics[Table[Disk[RandomReal[{-1,1}, 2], 1], {i,10}]]`}</Wl>
## Dynamics
Fully support for a radius and coordinates. Use [Offload](../Interpreter/Offload.md)

## Parameters

### `RGBColor`
Color of the filling and stroke (if `EdgeForm` is not specified)

```mathematica
{Blue, Disk[{0,0}, 1]}
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJEaXNrIixbIkxpc3QiLDAs
MF0sMV1dXQ==
`}>{`Graphics[{Blue, Disk[{0,0}, 1]}]`}</Wl>


### `EdgeForm`
Specifies the color of a stroke 

```mathematica
{EdgeForm[Red], Blue, Disk[{0,0}, 1]}
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkVkZ2VGb3JtIixbIlJHQkNvbG9yIiwxLDAsMF1dLFsiUkdC
Q29sb3IiLDAsMCwxXSxbIkRpc2siLFsiTGlzdCIsMCwwXSwxXV1d
`}>{`Graphics[{EdgeForm[Red], Blue, Disk[{0,0}, 1]}]`}</Wl>


### `Opacity`
Defines opacity for a primitive (see [[Opacity]])

```mathematica
{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIk9wYWNpdHkiLDAuNV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi
RGlzayIsWyJMaXN0IiwtMC41LDBdLDFdLFsiUkdCQ29sb3IiLDAsMCwxXSxbIkRpc2siLFsiTGlz
dCIsMC41LDBdLDFdXV0=
`}>{`Graphics[{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}]`}</Wl>


## Methods
### `EventHandler`
One can listen to a several events produced by this primitive using [`EventHandler`](../Misc/Events.md#`EventHandler`)

```mathematica
EventHandler[t_Disk, {event_ -> handler_, ...}]
```

where `event` can be
- `"mousemove"` detects and sends coordinates of a mouse, when it is over this element 
- `"drag"` makes primitive draggable and emits coordinates
- `"zoom"` detects zoom / mouse-wheel
- `"click"` detects mouse clicks
