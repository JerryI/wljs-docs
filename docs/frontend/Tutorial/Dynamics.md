---
sidebar_position: 3
---
The way how dynamics work is quite different compared to Wolfram Mathematica. The key changes were made for the sake of performance and control (or imagination of  @JerryI - maintainer)

import Notebook from '@site/src/components/wljs-notebook-react';



## Architecture
All dynamics in terms of what you expect from Mathematica's experience happens on the frontend's side, i.e. in your browser (running [WLJS Interpeter](../../interpreter/intro.md)). Have a look at the diagram

![](../../imgs/architecturep.excalidraw.svg)

Some expressions are meant for to be executed on frontend, i.e. not defined on the Kernel, then a user do not need to specify explicitly what and when should happen. In other cases, a user can use `Offload` (or `Hold`, but it is not recommended) attribute or `CreateFrontEndObject` to tell explicitly Wolfram Kernel pass an expression without evaluation to the frontend. Therefore one can play around with a way of splitting your code-base to archive the maximum flexibility and performance. 

:::tip
Always keep in mind, which part of code executes on Wolfram Kernel (server) and what is delegated to the frontend (browser). This is the only way to write predictable and good performing code 
:::

## Automatic tracking of held symbols
It does not mean, that your `Set` statements will be reevaluated on change of a nested symbol, however, for most graphics primitives it works out of the box. Use [Offload](../Reference/Dynamics/Offload.md) wrapper to hold symbols for the frontend

<Notebook code="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" name="swordsmanship-a286f">swordsmanship-a286f</Notebook>

:::info
`Offload` just does a simple trick - provides to a frontend an unknown symbol, which forces frontend to fetch it from the Kernel. Once it fetched, a dynamic link would be created. 
:::

The binding itself happens between `Rectangle` and `a`, but not `Graphics`, therefore only partial reevaluation occurs. To know more about details see [WLJS](../../interpreter/Advanced/symbols.md).

:::danger
Not all functions support dynamic binding or updates. Please check __Reference__ section, if the argument or a function supports dynamic updates. 

For deeper look see more about it there __[architecture](../../interpreter/Advanced/architecture.md), [containers](../../interpreter/Advanced/containers.md)__
:::

## Event-based approach
Working with GUI elements standing for input is done in more controllable way, where each button or slider is an event-generator

:::note
A library that provides UI elements used is [wljs-input](https://github.com/JerryI/wljs-inputs). See dedicated docs of it.
:::

Once event was fired, the assigned handler function will be called.

<Notebook code="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" name="billiard-b90f6">billiard-b90f6</Notebook>

![](../../ezgif.com-optimize-6.gif)

`slider` symbol is actually a special object, that stores the representation of a slider and an ID for the event, that will be fired when a user drags a knob. There is a shortcut for assigning a handler function `handler // slider` or one can also write

```mathematica
EventHandler[slider, Function[data,
//...
]]
```

#### 🍪 Example 1
Let us demonstrate how a wave packet travels though space and time

```mathematica title="cell 1"
packet[x_, t_] := Sum[Sin[- w t + w x], {w, 0,3,0.05}] / 10;
line = Table[{x, packet[x, 0]}, {x, 0, 10, 0.1}];

Graphics[Line[line // Offload], Frame->True, FrameLabel->{{"amplitude"}, {"distance"}}]
```

here `line` symbol is dynamic. Now we need a slider to control time

```mathematica title="cell 2"
EventHandler[InputRange[0,5,0.5, 0], Function[t, 
  line = Table[{x, packet[x, t]}, {x, 0, 10, 0.1}];
]]
```

The desired result looks line this

![](../../ezgif.com-video-to-gif-3.gif)

### Inline event handlers
It looks similar to Mathematica's implementation, where one can add an event handler to a random graphics primitive

```mathematica
p = {0,0};
Graphics[{
	White,
	EventHandler[
		Rectangle[{-2,-2}, {2,2}],
		{"mousemove"->Function[xy, p = xy]}
	],
	PointSize[0.05], Cyan,
	Point[p // Offload]
}, TransitionDuration->40, TransitionType->"Linear"]
```

The following event are available
- `drag` - provides a list of two coordinates
- `zoom` - provides one relative scaling number
- `click` - provides coordinates, where the cursor clicked
- `mousemove` - provides coordinates of a mouse
- `mouseover` - provides coordinates once, when a mouse appears at a div

for 3D graphics the following events are provided
- `transform` - sends an association with a new position of a dragged object

:::note
Event handlers wrapped around graphics primitives are parts of [wljs-graphics-d3](https://github.com/JerryI/wljs-graphics-d3) library.
:::

#### 🍪 Example 2
Let us show a fun example - implementation of FABRIK solver.

Define a random chain of segments with a random fixed lengths
```mathematica title="cell 1"
chain = {Cos[#[[1]]], Sin[#[[2]]]}&/@ RandomReal[{-1,1}, {65, 2}] // Sort;
lengths = Norm /@ (chain // Reverse // Differences) // Reverse;
```

The most stupid and simple implementation of FABRIK
```mathematica title="cell 2"
fabrik[lengths_, target_, origin_] := Module[{buffer, prev},
  buffer = Table[With[{p = chain[[-i]]},
    If[i === 1,
      prev = target;
      target
    ,
    
      prev = prev - Normalize[(prev - p)] lengths[[1-i]];
      prev 
    ]
  ], {i, chain // Length}] // Reverse;

  Table[With[{p = buffer[[i]]},
    If[i === 1,
      prev = origin;
      origin
    ,
    
      prev = prev - Normalize[(prev - p)] lengths[[i-1]];
      prev 
    ]
  ], {i, chain // Length}]
]
```

To show the result will will use a simple [Line](../Reference/Graphics-D3/Line.md) primitive coupled to a `chain` symbol and an inline event-handler coupled to a target point of a chain

```mathematica title="cell 3"
Graphics[{

  Line[chain // Offload], 
  Red, PointSize[0.06], 
  EventHandler[Point[{-1,-1}], {"drag"->Function[xy, chain = fabrik[lengths, xy, chain // First]]}], 
  Blue, Point[origin // Offload]
  
}, PlotRange->{{-2,2}, {-2,2}}, ImageSize->500, TransitionType->"Linear", TransitionDuration->30]
```

By dragging the red point you update all positions joints

![](../../ezgif.com-optimize-5.gif)

*use wheel to zoom and a left click to pan*


:::info
All examples shown here are shipped together with a frontend. Locate
<div style={{width:"120px"}}>

![](../../Screenshot%202023-11-29%20at%2022.20.08.png)

</div>

:::