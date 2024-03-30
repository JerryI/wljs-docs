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
IixbIkxpc3QiLDAuNiwwXSxbIkxpc3QiLDEsNy40MDMwMDgzNTg2Njk0MjhdXSxbIlJHQkNvbG9y
IiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMS40LDBdLFsiTGlzdCIsMSw0Ljc2Mjg2NjQ5
MzAzNDc2NzVdXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlz
dCIsMS42LDBdLFsiTGlzdCIsMiw0Ljg0NjIzMTA3ODAxMDQ0Nl1dLFsiUkdCQ29sb3IiLDEsMCww
XSxbIlJlY3RhbmdsZSIsWyJMaXN0IiwyLjQsMF0sWyJMaXN0IiwyLDUuNzM5NDgwNzg1MDY5MzI1
NV1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIsWyJMaXN0IiwyLjYs
MF0sWyJMaXN0IiwzLDUuNzE1MzAwNjM0OTQ5NTY4XV0sWyJSR0JDb2xvciIsMSwwLDBdLFsiUmVj
dGFuZ2xlIixbIkxpc3QiLDMuNCwwXSxbIkxpc3QiLDMsNS42MTM5NTk2NjEzOTA4ODZdXV0sWyJM
aXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMy42LDBdLFsiTGlz
dCIsNCwzLjMyNDU4NDMxMTUzODA4NzVdXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUi
LFsiTGlzdCIsNC40LDBdLFsiTGlzdCIsNCw1LjczODc1NTE3MzczOTc5MzVdXV0sWyJMaXN0Iixb
IlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsNC42LDBdLFsiTGlzdCIsNSw0
LjgwODA1MTU1MzI0MTUwNV1dLFsiUkdCQ29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0
Iiw1LjQsMF0sWyJMaXN0Iiw1LDQuNjMzODAxMDg0MTc4OTYxXV1dLFsiTGlzdCIsWyJSR0JDb2xv
ciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDUuNiwwXSxbIkxpc3QiLDYsOC41NzUwMzI1
ODIyMDk5MzddXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsNi40LDBd
LFsiTGlzdCIsNiw2LjUyOTI0MTA3MDQ3ODQ1OF1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwx
XSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw2LjYsMF0sWyJMaXN0Iiw3LDQuMTM5MDkyNTUwMzcyNTgz
XV0sWyJSR0JDb2xvciIsMSwwLDBdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDcuNCwwXSxbIkxpc3Qi
LDcsMy40NDU2MzY4MzIxNzgzODldXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0
YW5nbGUiLFsiTGlzdCIsNy42LDBdLFsiTGlzdCIsOCw5LjAxODQyNDU4MjE0ODk1Nl1dLFsiUkdC
Q29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw4LjQsMF0sWyJMaXN0Iiw4LDcuNjQ0
NTg3MjI2NzMyMzQ0NV1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIs
WyJMaXN0Iiw4LjYsMF0sWyJMaXN0Iiw5LDQuNDAxMzk1ODA5OTcxNjA5XV0sWyJSR0JDb2xvciIs
MSwwLDBdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDkuNCwwXSxbIkxpc3QiLDksMy4yODA2NDUzMTI1
MTE1XV1dLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDku
NiwwXSxbIkxpc3QiLDEwLDguNjc2NTIwOTM4NzAxNTQzXV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi
UmVjdGFuZ2xlIixbIkxpc3QiLDEuMDRlMSwwXSxbIkxpc3QiLDEwLDguNTQyMDk4MTE1ODk5OTU2
XV1dXV0sWyJSdWxlIiwiRnJhbWUiLHRydWVdXQ==
`}>{`data = RandomReal[{3, 10}, {10, 2}];Graphics[{EdgeForm[Black], Blue, Table[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], Red, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]}, Frame -> True]`}</Wl>
