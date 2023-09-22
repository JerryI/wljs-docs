---
env:
  - Wolfram Kernel
---
Holds (or offloads) an expression to be evaluated on frontend (WLJS)

```mathematica
Offload[expr_]
```

It has `HoldFirst` attribute. 

:::info
Please, see the tutorial [Dynamics](../../Tutorial/Dynamics.md)
:::
## Examples
### Dynamics
Typical example for the dynamic evaluation

```mathematica
pts = RandomReal[{-1,1}, {64, 2}];
Graphics[{PointSize[0.02], Point[pts // Offload]}, ImageSize->350]
```

<Wl>{`Graphics[{PointSize[0.02], Point[RandomReal[{-1,1}, {64, 2}] // Offload]}, ImageSize->350]`}</Wl>

And then, change the variable from the separate task
```mathematica
task = SetInterval[With[{},
  pts = (# + 0.001 Sum[
    (i - #)/(Norm[i - #]^3 + 0.1) - (i - #)/(Norm[i - #]^5 + 0.1)
  , {i, pts}]) &/@ pts;
], 100]
```

Don't forget to remove it afterwards
```mathematica
TaskRemove[task]
```

### Force WL Kernel to offload an expression 
Looking back to the previous example, the function  [`RandomReal`](../WLJS/RandomReal.md) implemented on both sides. If you offload it to the `Point` expression

```mathematica
Graphics[{PointSize[0.02], Point[RandomReal[{-1,1}, {64, 2}] // Offload]}]
```

Each time you load a notebook the distribution of the point will be different, since it reevaluate it on frontend's side each time.

## Dev notes
The actual implementation of the expression is extremely simple
```mathematica
SetAttributes[Offload, HoldFirst]
```

```js
core.Offload = async (args, env) => {
	return await intepretate(args[0], env)
}
core.Offload.update = core.Offload
core.Offload.destroy = core.Offload
```

The difference from `Hold` is that it will not be affected by `ReleaseHold`.