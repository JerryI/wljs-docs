---
env:
  - WLJS
package: wljs-graphics-d3
context: JerryI`Notebook`Graphics2D`
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/Kernel.wl
---
```mathematica
ZoomAt[k_, position_:{0,0}]
```

zooms `k` times at the given position `position`.

:::info
This has to be called inside the instance of [Graphics](frontend/Reference/Graphics/Graphics.md) using [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md)
:::

*All transition effects are applied here as well*

## Example
Let us make a simple plot and reference it using [FrontInstanceReference](frontend/Reference/Frontend%20IO/FrontInstanceReference.md)

```mathematica
ref = FrontInstanceReference[];
Plot[x, {x,0,1}, Epilog->{ref}]
```

now we can zoom it

```mathematica
FrontSubmit[ZoomAt[1.2, {-0.1,0.0}], ref] 
```