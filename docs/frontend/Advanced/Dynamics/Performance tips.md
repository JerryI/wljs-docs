---
draft: false
---

## Performance Tips
You can explicitly choose what will be interpreted on the frontend or backend. There are a few possibilities for our function inside the `Line` expression.

### Full Load on the Kernel
For this, one needs to modify the code to:

```mathematica
EventHandler[InputRange[0,4,0.1], Function[data, 
	lines = With[{y = data}, 
		Table[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]
	]
]];
% // EventFire (* Just to initialize *)
```

The last line manually fires an event to initialize the symbol `lines`. Then, for the output, we can write:

```mathematica
Graphics[{Cyan, Line[lines // Offload]}]
```

This binding can be illustrated as shown in the image below:

![](../../../imgs/dynEx1.excalidraw.svg)

### Using the Frontend
One can move the entire `Table` computation to the browser's side. Let's discard our previous changes:

```mathematica
EventHandler[InputRange[0,4,0.1], Function[data, 
	v = data
]];
% // EventFire
```

##### Naive Approach 1
A straightforward solution for output could be:

```mathematica
Graphics[{Cyan, Line[
	Table[{Cos[x], Sin[Offload[v] x]}, {x,0,2Pi, 0.1}]
]}]
```

This would be __a terrible solution__ 👎🏼  

![](../../../imgs/dynEx2.excalidraw.svg)

Each time the `Table` iterator `x` goes through the range of values, it creates a sublist of `Sin` and `Cos` functions that contain the dynamic variable `v`. This results in multiple instances of `v`.

:::danger

```mathematica
Line[Table[Expression[Offload[symbol]], {i, 10}]]
```
Creates `10` instances of `symbol`. The `Line` function will be called __10__ times on each update of `symbol`!
:::

:::danger
Avoid placing dynamic symbols inside large `Table` expressions. Minimize the number of copies created.
:::

##### Naive Approach 2
Let's try to improve it a bit:

```mathematica
Graphics[{Cyan, Line[
	Table[{Cos[x], Sin[v x]}, {x,0,2Pi, 0.1}] // Offload
]}]
```

This is also __inefficient__ 👎🏼  The `Table` function still runs on the __browser's side__.

![](../../../imgs/dynEx3.excalidraw.svg)

##### Optimized Version
One can reduce the number of instances to just one using `With`, as shown in the example above:

```mathematica
Graphics[{Cyan, Line[
	With[{y = v}, 
		Table[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]
	] // Offload
  ]
}]
```

This __saves a lot of resources__ 👍🏼  

![](../../../imgs/dynEx4.excalidraw.svg)

:::tip
```mathematica
Line[With[{y = symbol}, Table[AnyExpression[y], {i, 10}]]]
```
Creates only 1 instance of `symbol`. The `Line` function will be called __once__ per update of `symbol`.
:::

:::tip
```mathematica
Line[symbol//Offload], ... Line[symbol//Offload]
```
This is acceptable since each `Line` is bound to its own `symbol` instance. Therefore, on an update of `symbol`, each `Line` expression will be reevaluated once.
:::

### If Duplicating Is Unavoidable
If you need to update two properties of a dynamic expression, such as [GraphicsComplex](frontend/Reference/Graphics3D/GraphicsComplex.md) (which has `VertexColors` and a list of vertices), it is unavoidable to use two [Offload](frontend/Reference/Interpreter/Offload.md) calls:

```mathematica
GraphicsComplex[vertices // Offload, {Polygon[triangles]}, "VertexColors"->Offload[colors]]
```

If later in the code:

```mathematica
vertices = ...;
colors = ...;
```

Both `vertices` and `colors` will cause the reevaluation of [GraphicsComplex](frontend/Reference/Graphics3D/GraphicsComplex.md) __twice__ for the same data set. However, reevaluation can be reduced using options of [Offload](frontend/Reference/Interpreter/Offload.md):

```mathematica
GraphicsComplex[vertices // Offload, {Polygon[triangles]}, "VertexColors"->Offload[colors, "Static"->True]]
```

Here, `colors` __will not be bound to__ `GraphicsComplex`. This results in __only a single reevaluation__ per update of `colors` and `vertices`. However, new values will still be read once `vertices` has been updated.

### A Possible Pitfall with `With`
There might be a temptation to wrap the `Line` expression inside `With`, like this:

```mathematica
Graphics[{Cyan, With[{y = v}, 
	Line[
		Table[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]
	]
] // Offload}]
```

__This will not work at all__ 👎🏼 because the binding will occur between `Graphics` and `v` objects.

![](../../../imgs/dynEx5.excalidraw.svg)

*Think of an onion from the Shrek movie!*

## Numeric Arrays
:::info
It is usually done automatically by Wolfram Language if the data has been generated using pure functions.
:::

When transferring points as nested lists, it is better to wrap them in `NumericArray`. This informs the WLJS Interpreter in the browser that only numbers or lists of numbers are expected, reducing the load during parsing.

For example, using [dynamic](frontend/Reference/Interpreter/Offload.md) symbols:

```mathematica
(* Every update *)
symbol = someFunctionThatReturnsList
```

*20 FPS*

![](./../../../No%20Numeric%20Array.gif)

By using `NumericArray`:

```mathematica
(* Every update *)
symbol = NumericArray[someFunctionThatReturnsList]
```

*~40 FPS*

![](./../../../NumericArray%20video.gif)