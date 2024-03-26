---
env:
  - WLJS
update: true
package: wljs-graphics-d3
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
```mathematica
Rectangle[{xmin_, ymin_}, {xmax_, ymax_}]
```

represents a basic rectangle

```mathematica
Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlz
dCIsMCwwXV0sWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDAuNSwwLjVd
XV1d
`}>{`Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]`}</Wl>


## Parameters
### `RGBColor`
filling color

### `EdgeForm`
stroke color

### `Opacity`
global opacity of an object

## Methods

### `Area`
Calculates total area (symbolically as well)

```mathematica
Area[Rectangle[{x1, y1}, {x2, y2}]]
```

### `RegionCentroid`

```mathematica
RegionCentroid[Rectangle[{x1, y1}, {x2, y2}]]
```

### `EventHandler`
One can listen to a several events produced by this primitive using [`EventHandler`](../Misc/Events.md#`EventHandler`)

```mathematica
EventHandler[t_Rectangle, {event_ -> handler_, ...}]
```

where `event` can be
- `"mousemove"` detects and sends coordinates of a mouse, when it is over this element 
- `"drag"` makes primitive draggable and emits coordinates
- `"zoom"` detects zoom / mouse-wheel
- `"click"` detects mouse clicks

## Dynamics
It fully supports dynamics. Use [Offload](../Interpreter/Offload.md) on coordinates.

## Example
A simple bar chart

```mathematica
data = RandomReal[{3, 10}, {10, 2}];

Graphics[{
	EdgeForm[Black], Blue, 
	Table[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], 
	Red, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]
}, Frame -> True]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIkVkZ2VGb3JtIixbIkdyYXlMZXZlbCIsMF1dLFsiUkdCQ29s
b3IiLDAsMCwxXSxbIkxpc3QiLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xl
IixbIkxpc3QiLDAuNiwwXSxbIkxpc3QiLDEsNy40NDA3ODE2MzU2MjM4MzldXSxbIlJHQkNvbG9y
IiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMS40LDBdLFsiTGlzdCIsMSw2Ljk4MTA0NjEz
MTQyNTU0OV1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIsWyJMaXN0
IiwxLjYsMF0sWyJMaXN0IiwyLDQuMjI0MzI1MzcwMjc1ODA5XV0sWyJSR0JDb2xvciIsMSwwLDBd
LFsiUmVjdGFuZ2xlIixbIkxpc3QiLDIuNCwwXSxbIkxpc3QiLDIsNi4zOTgxMDA4NjE5MjM4MjJd
XV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMi42LDBd
LFsiTGlzdCIsMyw0LjYwMDU0NjUyMTQ0NjAyNF1dLFsiUkdCQ29sb3IiLDEsMCwwXSxbIlJlY3Rh
bmdsZSIsWyJMaXN0IiwzLjQsMF0sWyJMaXN0IiwzLDguODE0NTAxMzYyMzMzNTc1XV1dLFsiTGlz
dCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDMuNiwwXSxbIkxpc3Qi
LDQsNS4zOTIxMTkxNTYzMzYxMzRdXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsi
TGlzdCIsNC40LDBdLFsiTGlzdCIsNCw5LjY0NTk4MzQ5MTY2OTQ4M11dXSxbIkxpc3QiLFsiUkdC
Q29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw0LjYsMF0sWyJMaXN0Iiw1LDMuMjI0
NTU2NzY1NTE0NzM5NF1dLFsiUkdCQ29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw1
LjQsMF0sWyJMaXN0Iiw1LDkuMTkwOTI5NDU4MzU2ODE2XV1dLFsiTGlzdCIsWyJSR0JDb2xvciIs
MCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDUuNiwwXSxbIkxpc3QiLDYsOS4wNDc4NTQwOTUx
NDAzNDhdXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsNi40LDBdLFsi
TGlzdCIsNiw3Ljg5NTgxMzE2ODIxNTA3MjVdXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0s
WyJSZWN0YW5nbGUiLFsiTGlzdCIsNi42LDBdLFsiTGlzdCIsNyw4LjMzNzUwNTc0MzQzNDI3Nl1d
LFsiUkdCQ29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw3LjQsMF0sWyJMaXN0Iiw3
LDkuOTA1MzYxMzQ0NDA5Nzg3XV1dLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFu
Z2xlIixbIkxpc3QiLDcuNiwwXSxbIkxpc3QiLDgsNi4xMjI5Mjc2OTg0OTk0NTQ1XV0sWyJSR0JD
b2xvciIsMSwwLDBdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDguNCwwXSxbIkxpc3QiLDgsOS44ODMz
MTY4MTE5MjI3NjhdXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsi
TGlzdCIsOC42LDBdLFsiTGlzdCIsOSwzLjQ3MTQzODc2MDY0NTA5OF1dLFsiUkdCQ29sb3IiLDEs
MCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw5LjQsMF0sWyJMaXN0Iiw5LDQuMDI4MjY1Mzk3ODcw
MzE5XV1dLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDku
NiwwXSxbIkxpc3QiLDEwLDcuMjI2OTEyNDY1MDMyNTczXV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi
UmVjdGFuZ2xlIixbIkxpc3QiLDEuMDRlMSwwXSxbIkxpc3QiLDEwLDUuNjgxNjYwNDkxMDY0NjRd
XV1dXSxbIlJ1bGUiLCJGcmFtZSIsdHJ1ZV1d
`}>{`data = RandomReal[{3, 10}, {10, 2}];Graphics[{EdgeForm[Black], Blue, Table[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], Red, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]}, Frame -> True]`}</Wl>
