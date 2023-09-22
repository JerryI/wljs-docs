---
env:
  - Wolfram Kernel
  - WLJS
update: 
needsContainer: 
virtual:
---
Allows to execute any arbitrary WL code on frontend's (browser / client), where the notebook interface is displayed

```mathematica
FrontSubmit[expr_, _ | MetaMarker["uid"]]
```

The executing takes place inside [WLJS Intepreter](../../../interpreter/intro.md) running in your browser / Electron App. The second argument __is optional__ and comes as `MetaMarker[]`, please, see examples below.

## Examples
### Execute any WLJS function from WL Kernel
There are many expressions working exclusively on the frontend's side, for instance [Alert](../WLJS/Alert.md) might be quite useful

```mathematica
FrontSubmit[Alert["Hi"]]
```

Or most common case - __a user defined function__

*cell 1*
```js
const dom = document.createElement('div');

core.MyFunction = async (args, env) => {
	const data = await interpretate(args[0], env);
	dom.innerHTML = data;
}

return dom;
```

*cell 2*
```mathematica
FrontSubmit[MyFunction[StringTemplate["<h3>``</h3>"][Now]]]
```

Please see the tutorial on this topic - [Frontend functions](../../Advanced/Frontend%20functions.md)

### Execute an expression inside the existing container
:::note
See more about containers [containers](../../../interpreter/Advanced/containers.md) and here [executables](../../Advanced/executables.md) and [meta-markers](../../../interpreter/Advanced/meta-markers.md)
:::
The common practical case is to append extra object onto the existing graph/plot with no reevaluation of the cell

*cell 1*
```mathematica
Plot[Sinc[x], {x, -10, 10}, ImageSize->350, Epilog->{MetaMarker["marker"]}]
```

*cell 2*
```mathematica
FrontSubmit[{Pink, Line[{{-5,0}, {5, 0.7}}]}, MetaMarker["marker"]]
```

The result will be

<Wl>{`Plot[Sinc[x], {x, -10, 10}, ImageSize->350, Epilog->{{Pink, Line[{{-5,0}, {5, 0.7}}]}}]`}</Wl>

:::info
This technique can work well __purely inside WLJS__ as well. Please see [meta-markers](../../../interpreter/Advanced/meta-markers.md)
:::


