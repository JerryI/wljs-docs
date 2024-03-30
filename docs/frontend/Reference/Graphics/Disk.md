---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
draws a filled [Circle](frontend/Reference/Graphics/Circle.md)

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

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkRpc2siLFsiTGlzdCIsMC40MDE3NzI1MzA5ODcyOTQ0LC0w
Ljg0ODIzNTY4MjYwNTcxODldLDFdLFsiRGlzayIsWyJMaXN0IiwtMC43NzA2MDI3NDc2MDczODg3
LDAuMzU5NDgzNTczMDQwOTU5MV0sMV0sWyJEaXNrIixbIkxpc3QiLDAuNjk0NjYzMzgwMDU1Njk4
NywwLjM3NjczODExNzIxMTc0MzldLDFdLFsiRGlzayIsWyJMaXN0IiwwLjcxNzc3MTgyOTQ5OTY3
NTYsMC40OTg1NDI0NTU1NzMzMjUzXSwxXSxbIkRpc2siLFsiTGlzdCIsMC44OTM2NDQ1OTM2ODky
MzI1LC0wLjM5MDcyMjA5NzE2ODk4MjldLDFdLFsiRGlzayIsWyJMaXN0IiwtMC42ODE0ODEzNzY1
NzIzMDk2LDAuMTg3NjE2Nzk4OTkyOTMzMzhdLDFdLFsiRGlzayIsWyJMaXN0IiwwLjQxMzk3NTM4
NjY0Mjg5ODgsMC43NTI2MzM2MDc5Njg4NjIzXSwxXSxbIkRpc2siLFsiTGlzdCIsMC4yMzcwOTU4
NjU0MjUxMzQ3MiwtMC4zNDQ4NDczMjEzNzEyMTkxXSwxXSxbIkRpc2siLFsiTGlzdCIsLTAuNzUx
ODEwNzM1NDQ5MjA0NSwwLjU3OTY2OTA4NTc3MzYzODhdLDFdLFsiRGlzayIsWyJMaXN0IiwwLjMz
NjE0NTUzOTk4NzI1MTA1LC0yLjM1Nzg5NDE0MTM4MzA1NDVlLTJdLDFdXV0=
`}>{`Graphics[Table[Disk[RandomReal[{-1,1}, 2], 1], {i,10}]]`}</Wl>
## Dynamics
Fully support for a radius and coordinates. Use [Offload](frontend/Reference/Interpreter/Offload.md)

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
Defines opacity for a primitive (see [[frontend/Reference/Graphics/Opacity]])

```mathematica
{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIk9wYWNpdHkiLDAuNV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi
RGlzayIsWyJMaXN0IiwtMC41LDBdLDFdLFsiUkdCQ29sb3IiLDAsMCwxXSxbIkRpc2siLFsiTGlz
dCIsMC41LDBdLDFdXV0=
`}>{`Graphics[{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}]`}</Wl>


## Methods
### `EventHandler`
One can listen to a several events produced by this primitive using [`EventHandler`](frontend/Reference/Misc/Events.md#`EventHandler`)

```mathematica
EventHandler[t_Disk, {event_ -> handler_, ...}]
```

where `event` can be
- `"mousemove"` detects and sends coordinates of a mouse, when it is over this element 
- `"drag"` makes primitive draggable and emits coordinates
- `"zoom"` detects zoom / mouse-wheel
- `"click"` detects mouse clicks
