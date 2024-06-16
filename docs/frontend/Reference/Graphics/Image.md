---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
Represents a raster image and plots the list of pixel's colors to a canvas used in notebooks

```mathematica
Image[{row1_List, row2_List...} | n_NumericArray, encoding_:"Real32"]
```

where each `row` is a list of pixel colors. The color format can be

- gray-scale `0. - 1.`
- RGB `{255,255,255}` or `{1,1,1,1}` depending on encoding

See more information on Image [here](https://reference.wolfram.com/language/ref/Image)

## Examples

### Direct
Show multiple iterations of a cellular automaton as a binary image
```mathematica
Image[CellularAutomaton[30, {{1}, 0}, 40], Magnification->4]
```

<Wl >{`Image[CellularAutomaton[30, {{1}, 0}, 40]]`}</Wl>

A random noise
```mathematica
Image[Table[RandomInteger[{0,1}], {i, 200}, {j, 350}]]
```

adding a color

```mathematica
Image[Table[RandomInteger[{0,255}, 3], {i, 200}, {j, 350}], "Byte"]
```

<Wl >{`Image[Table[RandomInteger[{0,255}, 3], {i, 200}, {j, 350}]]`}</Wl>


:::tip
Use `NumericArray` to provide and handle pixel data. It has to be a nested list of lists as usual. There is a following correspondence.  `Byte` and `UnsignedInteger8` combo is the most efficient.
::

### Indirect
One can also use `Rasterize` function to show any expressions as an image

```mathematica
x + y // Rasterize
```

<Wl >{`x + y // Rasterize`}</Wl>



## Dynamics
It does support dynamic variables. For example

```mathematica
Puffer = {{1, 4}, {2, 5}, {3, 1}, {3, 5}, {4, 2}, {4, 3}, {4, 4}, {4,
     5}, {8, 1}, {9, 2}, {9, 3}, {10, 3}, {11, 3}, {12, 2}, {15, 1}, {15,
     4}, {16, 5}, {17, 1}, {17, 5}, {18, 2}, {18, 3}, {18, 4}, {18, 5}};

board = NumericArray[
  CellularAutomaton["GameOfLife", {SparseArray[Puffer
     -> 1], 0}, {{500}}] // First
, "UnsignedInteger8"];

Image[board // Offload, "Bit", Magnification -> 3, Antialiasing->False]
```

and now we can run the simulation with a desired speed

```mathematica
task = SetInterval[board = NumericArray[CellularAutomaton["GameOfLife",
     board // Normal, {{1}}] // First, "UnsignedInteger8"], 50];

SetTimeout[TaskRemove[task], 5000];
```

See more examples in [Raster animation](frontend/Advanced/Dynamics/Raster%20animation.md)
