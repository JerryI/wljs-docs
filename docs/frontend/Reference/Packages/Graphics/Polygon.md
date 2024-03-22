---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
```mathematica
Polygon[{p1, p2, ...}]
```

represents a filled polygon with points

```mathematica
pol = Polygon[{{1, 0}, {0, Sqrt[3]}, {-1, 0}}];
Graphics[pol]
```

<Wl>{`pol = Polygon[{{1, 0}, {0, Sqrt[3]}, {-1, 0}}]; Graphics[pol]`}</Wl>

```mathematica
h[x_, y_] := Polygon[Table[{Cos[2 Pi k/6] + x, Sin[2 Pi k/6] + y}, {k, 6}]];

Graphics[{EdgeForm[Blue], LightBlue, Table[h[3 i + 3 ((-1)^j + 1)/4, Sqrt[3]/2 j], {i, 5}, {j, 10}]}]
```

<Wl>{`h[x_, y_] := Polygon[Table[{Cos[2 Pi k/6] + x, Sin[2 Pi k/6] + y}, {k, 6}]];Graphics[{EdgeForm[Blue], LightBlue, Table[h[3 i + 3 ((-1)^j + 1)/4, Sqrt[3]/2 j], {i, 5}, {j, 10}]}]`}</Wl>

Digital petals

```mathematica
With[{d = 2 Pi/12}, 
 Graphics[
  Table[{EdgeForm[Black], Hue[(-11 + q + 10 r)/72., 1, 0.5], 
    Polygon[{(8 - r) {Cos[d (q - 1)], 
        Sin[d (q - 1)]}, (8 - r) {Cos[d (q + 1)], 
        Sin[d (q + 1)]}, (10 - r) {Cos[d q], Sin[d q]}}]}, {r, 6}, {q,
     12}]]]
```

<Wl>{`With[{d = 2 Pi/12}, 
 Graphics[
  Table[{EdgeForm[Black], Hue[(-11 + q + 10 r)/72., 1, 0.5], 
    Polygon[{(8 - r) {Cos[d (q - 1)], 
        Sin[d (q - 1)]}, (8 - r) {Cos[d (q + 1)], 
        Sin[d (q + 1)]}, (10 - r) {Cos[d q], Sin[d q]}}]}, {r, 6}, {q,
     12}]]]`}</Wl>

## Parameters

### `RGBColor`
filling color

### `Opacity`
global opacity of an object

### `EdgeForm`
stroke color

## Dynamics
It fully support dynamics. Use [Offload](../../Dynamics/Offload.md).
