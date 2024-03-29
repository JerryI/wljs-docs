---
sidebar_position: 4
---

![](../../imgs/Screenshot%202024-03-13%20at%2019.30.35.png)

*WebGL demo*

__[Github repo](https://github.com/JerryI/wljs-js-support)__
Javascript code is evaluated as a module, i.e. __all defined variables are isolated to the cell__.

:::tip
To define global variables, use `window` or `core` object.
```js
window.variable = 1
```
:::

## Output cell
The returned value from the function can be a Javascript object or DOM element. The last one will be displayed in the output cell




## Handlers
There is a few quite useful built-in objects accesable from the cell. 

### this.ondestroy
This object is called when a cell has been destroyed. Assign any clean-up function to the given object

```js
this.ondestroy = () => {
	//clean up the stuff
}
```

:::danger
Always clean up any timers using `this.ondestroy` variable. Otherwise those timers and animation loops will continue to work even after reevaluating the cell.
:::

### requestAnimationFrame
It is well-common method used in Javascript to synchronize with a framerate of the browser and render some graphics



:::danger
Do not forget to `cancelAnimationFrame` using `this.ondestroy` method
:::

## Communication with Wolfram Kernel
In general one can define any function for WLJS Interpreter using Javascript cells, please see guide here [FrontSubmit](../Reference/Frontend%20IO/FrontSubmit.md) and [Integration with server / client via WebSockets](../Advanced/Events%20system/event-generators.md#Integration%20with%20server%20/%20client%20via%20WebSockets)

For the most applications event-based system is used, see [Dynamic](../Development/Evaluation/Dynamic.md)

