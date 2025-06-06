## Motivation



### Compress and reuse large expressions
Is intended to reduce the load to on the frontend by packing a large Wolfram Expressions like [Graphics](frontend/Reference/Graphics/Graphics.md) with all its data to a single line reference [FrontEndExecutable](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) or [FrontEndRef](frontend/Reference/Frontend%20Objects/FrontEndRef.md), which can be interpreted later by the editor in the cell. 

To display such expressions like

```mathematica
Plot[x, {x,0,1}]
```

inline in the editor or on a slide, they are converted to a pointer

```mathematica
FrontEndExecutable["746fa2e0-24f7-4003-a7cc-4c77f8b4891d"]
```

An actual expression now is shared between the frontend and the Kernel. Both can have an access to the original expression using [FrontEndExecutable](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) wrapper on frontend (see [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md)) and [FrontEndRef](frontend/Reference/Frontend%20Objects/FrontEndRef.md) wrapper to access it from Wolfram Kernel.

Such objects are also saved to the notebook internally.

Defined [StandardForm](frontend/Reference/Formatting/StandardForm.md) and [WLX](frontend/Cell%20types/WLX.md) on `FrontEndExecutable` uses [ViewBox](frontend/Reference/Formatting/Low-level/ViewBox.md) to replace it with an empty widget. This widget later is populated by the content produced by the original expression, for example [Graphics](frontend/Reference/Graphics/Graphics.md), [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md) or [Image](frontend/Reference/Image/Image.md).

:::note
On especially large objects we apply `zlib` compression.
:::

### A shortcut for Javascript functions to work
Following the guide [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md) to run Javascript function, one has to define an output form properly (using [ViewBox](frontend/Reference/Formatting/Low-level/ViewBox.md) or others). Since [FrontEndExecutable](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) has a predefined output forms for the most cases, it is easier to wrap any

```mathematica
MyJSFunction[] // CreateFrontEndObject
```

to quickly see the result of the evaluation.

## Properties
1. It does not alter the original expression.
2. All active objects are synchronized between the notebook and a Kernel. Once you have __saved__ a notebook they are serialized to a file as well.
3. All active objects are exported to [Static HTML](frontend/Exporting/Static%20HTML.md) or [Dynamic HTML](frontend/Exporting/Dynamic%20HTML.md) or [Figures](frontend/Exporting/Figures.md)
4. All objects are embedded automatically to [Slides](frontend/Cell%20types/Slides.md) or [WLX](frontend/Cell%20types/WLX.md)
5. [StandardForm](frontend/Reference/Formatting/StandardForm.md) for all [FrontEndExecutable](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) is [ViewBox](frontend/Reference/Formatting/Low-level/ViewBox.md) 
6. [WLXForm](frontend/Reference/Formatting/WLXForm.md) for all [FrontEndExecutable](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) is a sort of view-box as well, but displayed on a slide / WLX output






