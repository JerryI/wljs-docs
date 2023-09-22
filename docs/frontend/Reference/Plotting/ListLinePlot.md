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

<Wl>{`ListLinePlot[{1, 1, 2, 3, 5, 8}, ImageSize->350]`}</Wl>

Add a filling under the line

```mathematica
ListLinePlot[Prime[Range[25]], Filling -> Axis]
```

<Wl>{`ListLinePlot[Prime[Range[25]], Filling -> Axis, ImageSize->350]`}</Wl>

Random walk

```mathematica
ListLinePlot[Accumulate[RandomReal[{-1, 1}, {250, 2}]]]
```

<Wl>{`ListLinePlot[Accumulate[RandomReal[{-1, 1}, {100, 2}]], ImageSize->350]`}</Wl>

## Dev notes
This function does not support dynamic updates, please use raw `Graphics` or alternative way - [ListLinePlotly](ListLinePlotly.md) to animate your data.