---
env:
  - Wolfram Kernel
package: wljs-manipulate

source: https://github.com/JerryI/wljs-manipulate/blob/main/Kernel.wl
---
```mathematica
Manipulate[expr_, {u_Symbol, min_, max_}..]
```

```mathematica
Manipulate[expr_, {{u_Symbol, initial_}, min_, max_}..]
```

```mathematica
Manipulate[expr_, {{u_Symbol, initial_}, min_, max_, step_}..]
```

```mathematica
Manipulate[expr_, {{u_Symbol, initial_, label_String}, min_, max_, step_}..]
```


generates a version of `expr` with controls added to allow interactive reevaluation

```mathematica
Manipulate[expr_, {{u_Symbol}, values_List}..]
```

```mathematica
Manipulate[expr_, {{u_Symbol, initial_}, values_List}..]
```

```mathematica
Manipulate[expr_, {{u_Symbol, initial_, label_String}, values_List}..]
```

## Examples
Manipulate `Series` 

```mathematica
Manipulate[Series[Sinc[x], {x, 0, n}], {n, 1, 5, 1}]
```

![](./../../../Screenshot%202024-08-20%20at%2012.31.29.png)

```mathematica
Manipulate[Plot3D[Sin[n x] Cos[n y], {x,-1,1}, {y,-1,1}], {n, 1, 5, 1}]
```

![](./../../../Screenshot%202024-08-20%20at%2012.34.02.png)

:::warning
`Manipulate` reevaluates the whole expression similar to [Refresh](frontend/Reference/Interpreter/Refresh.md), which is a huge overhead for the system. Please, consider to use [ManipulatePlot](frontend/Reference/Plotting%20Functions/ManipulatePlot.md), [AnimatePlot](frontend/Reference/Plotting%20Functions/AnimatePlot.md), [ManipulateParametricPlot](frontend/Reference/Plotting%20Functions/ManipulateParametricPlot.md) or general dynamics using [Offload](frontend/Reference/Interpreter/Offload.md) (see [Dynamics](frontend/Dynamics.md)) for any plots, rapidly changing data and smooth transitions instead of `Manipulate`.
:::

`Manipulate` is caching all results by the default.

Example with mixed symbolics and graphics

```mathematica @
Manipulate[
  Row[{
    "m", "==", MatrixForm[m], 
    StreamPlot[Evaluate[m . {x, y}], {x, -1, 1}, {y, -1, 1}, 
      StreamScale -> Large, ImageSize -> Small
    ]
  }], {{m, ((*GB[*){{1(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)2}}(*]GB*))}, { ((*GB[*){{1(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)2}}(*]GB*)) -> "Nodal source",  ((*GB[*){{1(*|*),(*|*)1}(*||*),(*||*){0(*|*),(*|*)1}}(*]GB*))  -> "Degenerate source",  ((*GB[*){{0(*|*),(*|*)1}(*||*),(*||*){-1(*|*),(*|*)1}}(*]GB*)) -> "Spiral source",  ((*GB[*){{-1(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)-2}}(*]GB*))  -> "Nodal sink",  ((*GB[*){{-1(*|*),(*|*)1}(*||*),(*||*){0(*|*),(*|*)-1}}(*]GB*)) -> "Degenerate sink",  ((*GB[*){{0(*|*),(*|*)1}(*||*),(*||*){-1(*|*),(*|*)-1}}(*]GB*)) -> "Spiral sink",  ((*GB[*){{0(*|*),(*|*)1}(*||*),(*||*){-1(*|*),(*|*)0}}(*]GB*)) -> "Center",  ((*GB[*){{1(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)-2}}(*]GB*))  -> "Saddle"}}]
```

![](./../../../Screenshot%202025-04-02%20at%2010.11.33.png)
