---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-plotly/blob/dev/src/Kernel.wl

package: wljs-plotly
---
```mathematica
PlotlyDeleteTraces[p_PlotlyInstance, traces_List, opts___]
```

removes traces listed in `traces` with indexes starting from `0`

:::tip
See the [official reference](https://plotly.com/javascript/plotlyjs-function-reference/)
:::

## Options
### `"Window"`
By the default is `Iherited`, which takes window from [PlotlyInstance](frontend/Reference/Plotly/PlotlyInstance.md). You can override it by providing [WindowObj](frontend/Reference/Frontend%20IO/WindowObj.md)
