---
env:
  - Wolfram Kernel
---


```mathematica
MakeBoxes[expr_, form_]
```

an output handler expression acting as `UpValues` for other expression converts it to a decorated form, which is then rendered by an editor.

__An expression will not be revealed__


`MakeBoxes` is applied only to the output expressions in a normal Wolfram cells, [Slides](../../Advanced/Slides/Slides.md) and  [WLX](../../Cell%20types/WLX.md). It will not affect any intermediate operations.

:::info
`MakeBoxes[..., StandardForm]` is applied to any visible output from the cell. It is also a part of a pipeline for `ToString[..., StandardForm]` used in [CellPrint](../Cells%20and%20Notebook/CellPrint.md), and [EditorView](../GUI/EditorView.md) for various applications.
:::

## Supported forms
- [StandardForm](StandardForm.md)
- [WLXForm](WLXForm.md)

## Used together with
- [BoxBox](BoxBox.md)
- [ViewBox](ViewBox.md)
- [InterpretationBox](InterpretationBox.md)

## Applications
It is a core concept of the Notebook interface

### Creating interactive objects
#### Used by
- [Graphics](../Graphics/Graphics.md)
- [Graphics3D](../Graphics3D/Graphics3D.md)
- [ListLinePlotly](../Plotly/ListLinePlotly.md)
- [Plotly](../Plotting%20Functions/Plotly.md)
- [EventObject](../Misc/Events.md#`EventObject`)
- many more

All graphics and interactive objects are running on WLJS interpreter, which is browser'a minimal Wolfram Language interpreter running on Javascript. It draws graphics, handles users interaction via JS. To explicitly run an expression on browser's side you need to apply [CreateFrontEndObject](../Frontend%20Objects/CreateFrontEndObject.md). This is done automatically using [MakeBoxes](MakeBoxes.md) 

for example
```mathematica
...
ListLinePlotly /: MakeBoxes[ListLinePlotly[args__], StandardForm] := With[{o = CreateFrontEndObject[ListLinePlotly[args]]}, 
	MakeBoxes[o, StandardForm]
]

ListPlotly /: MakeBoxes[ListPlotly[args__], StandardForm] := With[{o = CreateFrontEndObject[ListPlotly[args]]}, 
	MakeBoxes[o, StandardForm]
]
...
```

### Styling symbols
Please consider to use `StandardForm` for `form` argument to achieve those effects. 

__See [ViewBox](ViewBox.md) and [BoxBox](BoxBox.md)__
### Data preview
One can make a preview of the data for example

```mathematica
dataHolder /: MakeBoxes[dataHolder[data_], StandardForm] := With[{
  display = ListPlot[data, ImageSize->200, Axes->False, ImagePadding->None] // CreateFrontEndObject
},
	InterpretationBox[MakeBoxes[display, StandardForm], data]
] 

dataHolder /: ListLinePlot[d_dataHolder, opts___] := ListLinePlot[d//First, opts]

dataHolder[RandomReal[{-1,1}, 100]]
```

```mathematica
dataHolder[RandomReal[{-1,1}, 100]] // ListLinePLot
```

![](../../../Screenshot%202024-03-27%20at%2021.03.24.png)

:::info
[ViewBox](ViewBox.md) __is more performant  compared to__ [InterpretationBox](InterpretationBox.md), when it comes to replacing symbols with [Graphics](../Graphics/Graphics.md) or other interactive objects.
:::

:::tip
For just a one-time decoration - use [Interpretation](Interpretation.md)
:::