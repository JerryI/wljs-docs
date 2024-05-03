---
env:
  - Wolfram Kernel
context: Notebook`Editor`FrontendObject`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontendObject.wl
package: wljs-editor
---

creates a reference to the inner expression and stores it into frontend objects storage __as JSON expression__ shared with Kernel and Notebook

```mathematica
CreateFrontEndObject[expr_, id_String | Null, opts___Rule] _FrontEndExecutable
```

Returns [`FrontEndExecutable`](frontend/Reference/Frontend%20Objects/FrontEndExecutable.md) object with a given `id` or generated.

See more about it in __[WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md)__

:::info
Is used to force Wolfram Kernel to execute an expression on the frontend (WLJS / browser's side) with an HTML element provided if needed for showing the data.
:::

This is a fundamental component  for `Graphics`, `InputRange`... and other interactive elements. Event `EventObject` that comes from [event-generators](frontend/Advanced/Events%20system/event-generators.md) use it to show the UI element.

In general, containers is a huge fundamental building blocks for almost everything. 

:::tip
If you do not want to apply [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md) on your symbol manually, consider to define [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) for [StandardForm](frontend/Reference/Decorations/StandardForm.md). Then it can be applied automatically once it goes to the output cell.
:::

## Options
### `"Store"`
Specifies which to storage to use for an expression (`"Frontend"`, `"Kernel"`, or `All`). The default values is `All`.

Each time you create `Graphics` or any other frontend object, it makes two copies of it: the first one is shared with a browser (WLJS), while  the second one is a *private* copy used by Wolfram Kernel once fetched by [FrontEndRef](frontend/Reference/Frontend%20Objects/FrontEndRef.md) or evaluated for a second time (see [ViewBox](frontend/Reference/Decorations/ViewBox.md)).



## Applications

:::info
For `Graphics`, `InputButton` and etc [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md) is applied automatically, once it is converted to a [StandardForm](frontend/Reference/Decorations/StandardForm.md) on output. 
:::

### Custom WLJS function inside a container
Use for custom defined WLJS functions i.e.

```js
.js
core.MyCustomStuff = async (args, env) => {
	env.element.innerText = "Hi dude!";
}
```

and then in the next cell
```mathematica
CreateFrontEndObject[MyCustomStuff[]]
```

:::tip
Use `TagSetDelayed` on [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) to skip this procedure, i.e.

```mathematica
MyCustomStuff /: MakeBoxes[m_MyCustomStuff, StandardForm] := With[{
	o = CreateFrontEndObject[m]
},
	MakeBoxes[m, StandardForm]
]
```

then you don't need to manually create a frontend object anymore.
:::


