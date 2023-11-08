---
env:
  - WLJS
registered: true
needsContainer: true
update: false
draft: true
---
```mathematica
Graphics[objects_, opts___]
```
represents a two-dimensional graphical image. This is a fundamental expression, which is produced by all 2D plotting functions

```mathematica
Graphics[{Green, Rectangle[{0, -1}, {2, 1}], Yellow, Polygon[{{2, 0}, {4, 1}, {4, -1}}], Purple, Arrow[{{4, 3/2}, {0, 3/2}, {0, 0}}], Black, Line[{{-1, 0}, {4, 0}}]}]
```

<Wl data={`WyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwwLDEsMF0sWyJSZWN0YW5nbGUiLFsiTGlz
dCIsMCwtMV0sWyJMaXN0IiwyLDFdXSxbIlJHQkNvbG9yIiwxLDEsMF0sWyJQb2x5Z29uIixbIkxp
c3QiLFsiTGlzdCIsMiwwXSxbIkxpc3QiLDQsMV0sWyJMaXN0Iiw0LC0xXV1dLFsiUkdCQ29sb3Ii
LDAuNSwwLDAuNV0sWyJBcnJvdyIsWyJMaXN0IixbIkxpc3QiLDQsWyJSYXRpb25hbCIsMywyXV0s
WyJMaXN0IiwwLFsiUmF0aW9uYWwiLDMsMl1dLFsiTGlzdCIsMCwwXV1dLFsiR3JheUxldmVsIiww
XSxbIkxpbmUiLFsiTGlzdCIsWyJMaXN0IiwtMSwwXSxbIkxpc3QiLDQsMF1dXV1d
`}>{`Graphics[{Green, Rectangle[{0, -1}, {2, 1}], Yellow, Polygon[{{2, 0}, {4, 1}, {4, -1}}], Purple, Arrow[{{4, 3/2}, {0, 3/2}, {0, 0}}], Black, Line[{{-1, 0}, {4, 0}}]}]`}</Wl>

## Options
### `"PlotRange"`
manually specifies, where the borders of the visible area (viewport) are

```mathematica
"PlotRange"->{{-1,1}, {-1,1}}
```

:::note
If `PlotRange` is missing, WLJS will try to guess the dimensions in order to fit all objects to the screen
:::

### `"ImageSize"`
specifies the actual size in pixels of a canvas

```mathematica
"ImageSize"->300 or "ImageSize"->{300,200}
```

### `Axes`
Show or hide axes 

### `AxesLabel`
Place labels on your axes
```mathematica
Plot[Sinc[x], {x, 0, 10}, AxesLabel -> {"x", "Sinc[x]"}]
```


Labels __accepts only strings__ or numbers unlike Mathematica, where you can put everything. 

Since it is translated into [`Text`](../Graphics/Text.md), one can use sort of TeX math input

```mathematica
Plot[PDF[NormalDistribution[0, 1], x], {x, -10, 10}, AxesLabel -> {"wavenumber (cm^{-1})", "absorption \\alpha"}, PlotRange->Full]
```


It also supports [Offset](../Graphics/Offset.md) attribute

```mathematica
Plot[PDF[NormalDistribution[0, 1], x], {x, -10, 10}, AxesLabel -> {Offset["wavenumber (cm^{-1})", {0,0.05}], "absorption \\alpha"}, PlotRange->Full]
```


### `Ticks`
Customize ticks by providing an array of numbers for both axes
```mathematica
Plot[x, {x, 0, 1}, Ticks->{{0, 0.5, 1}, {}}]
```


Or by providing as pairs `{Number, String}` one can specify the displayed text
```mathematica
Plot[x, {x, 0, 1}, Ticks->{{{0, "Zero"}, {0.5, "Half"}, {1,"One"}}, {}}]
```


### `Controls` 💛
This is more an option for [Graphics](../Graphics/Graphics.md), but with a bit of a hacking it can be used here as well. The features __allows to pan and zoom your plots__, that was never possible in Mathematica

```mathematica
Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1];
Insert[%, Controls->True, {2,-1}]
```



*Try to use your mouse here*

### `Frame`
Turns plot into the journals-like styled graph. In general it has much more options to customize the look

```mathematica
Plot[x, {x, 0, 1}, Frame->True]
```


#### `FrameTicks`
The same as [`Ticks`](#`Ticks`), but for this regime.

#### `FrameLabels` 
The same as [`AxesLabel`](#`AxesLabel`)
```mathematica
Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}]
```


#### `FrameStyle`
Affects the style of [`FrameLabels`](#`FrameLabels`). Use `Directive` for changing the style
```mathematica
Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameStyle->Directive[FontSize->16]]
```


#### `FrameTicksStyle`
Affects the style of [`FrameTicks`](#`FrameTicks`)
```mathematica
Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameTicksStyle->Directive[FontSize->16]]
```


#### `TickLabels`
:::info
Since `Plot` options are hardcoded in WL core, we cannot add new options, however using trick with `Insert` any values can be provided to the resulting `Graphics` expression
:::
To remove unnecessary ticks, use
```mathematica
Plot[x, {x, 0, 1}, Frame->True];
Insert[%, "TickLabels"->{{True, False}, {True, False}}, {2,-1}]
```



### `ClippingStyle`
Show the clipped regions like the rest of the curve and colored
```mathematica
Plot[Sin[x]/x^2, {x, -10, 10}, ClippingStyle -> Red]
```



### `Filling`
Fill the area under, over of between curves

```mathematica
Plot[Evaluate[Table[BesselJ[n, x], {n, 4}]], {x, 0, 10}, Filling -> Axis]
```



Possible options will be
- `Bottom`
- `Top`
- `{1 -> {2}}` from curve 1 to 2


### `Baseline`
Align graphs by the $x$ axis in each plot:
```mathematica
{Plot[Im[Zeta[1/2 + I t]], {t, -20, 20}, BaselinePosition -> Axis], 
 Plot[Re[Zeta[1/2 + I t]], {t, -20, 20}, BaselinePosition -> Axis]} // Row
```

### `Epilog`
Puts any graphics object on top of the data plotted

```mathematica
Plot[Sin[x], {x, 0, 2 Pi}, Epilog -> {PointSize[0.04], Point[{0, 0}], Point[{Pi, 0}], Point[{2 Pi, 0}]}]
```



It opens up many possibilities, since it provides low-level access to the `Graphics` canvas.

### `Prolog`
The same as [`Epilog`](#`Epilog`), but acts before plotting the data.

### `ExclusionsStyle`
Use red lines to indicate the vertical asymptotes

```mathematica
Plot[Tan[x], {x, 0, 10}, Exclusions -> {Cos[x] == 0}, 
 ExclusionsStyle -> Red]
```



### `ImageSize`
A common option for any graphics 
```mathematica
ImageSize -> Width
```
or
```mathematica
ImageSize -> {Width, Height}
```
It uses pixels as units

### `MaxReqursion`
Affects the accuracy of the plot when it comes to the sudden changes of a sampled function
```mathematica
Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1]
```



The lowest values is `0`

### `Mesh`
Shows sampling points
```mathematica
Plot[Sin[1/x], {x, 0.001, 0.1}, Mesh -> All]
```



### `PeformanceGoal`
Affects the number of sampling points to reduce the load
- `"Speed"`
- `"Quality"`

### `PlotPoints`
Change the initial sampling points
- a number

### `PlotRange`
Change the lot range to show the whole area
```mathematica
Plot[Sqrt[x], {x, -5, 5}, PlotRange -> Full]
```



Or a custom range
```mathematica
Plot[Sqrt[x], {x, -5, 5}, PlotRange -> {{-5,5}, {0,1}}]
```



### `RegionFunction`
Show the specific area only
```mathematica
Plot[Sin[x], {x, 0, 8 Pi}, RegionFunction -> Function[{x, y}, Abs[y] > 0.5]]
```



