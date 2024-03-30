---
env:
  - Wolfram Kernel
origin: https://github.com/JerryI/wljs-inputs
context: Notebook`Kernel`Inputs`
package: wljs-inputs
update: true
source: https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl
---
```mathematica
HTMLView[string_String | _Offload]
```

a representation of an HTML element in the notebook. It is used for rendering HTML in-place, where this expression is located and also is used for dynamic indication.

:::warning
Javascript code used inside will not be executed, for this use [WLXEmbed](frontend/Reference/GUI/WLXEmbed.md)
:::

```mathematica
HTMLView["<span style=\"color:red\">Hello World</span>"]
```

![](../../../imgs/Screenshot%202024-03-25%20at%2012.26.11.png)

## Dynamic updates
It fully supports dynamic updates. Use [Offload](frontend/Reference/Interpreter/Offload.md)