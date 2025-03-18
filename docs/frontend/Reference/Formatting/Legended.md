Attaches legend or label to any `expr`

```mathematica
Legended[expr_, lbl_ | legend_]
```

One can use it to provide legend entries for specific elements

```mathematica
PieChart[{1, Legended[2, "Bob"], 3, Legended[4, "John"]}]
```

![](./../../../Screenshot%202025-03-18%20at%2012.56.40.png)

Add a legend to a table of numbers

```mathematica
Legended[ Grid[Partition[ Table[If[PrimeQ[n], Item[n, Background -> LightBlue], n], {n, 100}], 10], Frame -> All], SwatchLegend[{LightBlue}, {"prime numbers"}]]
```

![](./../../../Screenshot%202025-03-18%20at%2012.58.10.png)

:::note
`Legended` is used implicitly with provided options `PlotLegends`

```mathematica
Plot[{BesselJ[2, x], BesselJ[3, x]}, {x, 0, 20}, 
 PlotLegends -> Placed["Expressions", {Right, Top}]]
```

![](./../../../Screenshot%202025-03-18%20at%2013.00.33.png)

:::