---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl
package: wljs-editor
---
```mathematica
MMAView[head_[args__]]
```

attempts to use Mathematica's frontend (technically backend) to render given expression to a raster [Image](frontend/Reference/Image/Image.md) and return it back.

WLJS Notebook does not support all possible styling and diagram types compared to Wolfram Mathematica. Here we give a user a workaround, which might be suitable for many cases.

For example

```mathematica @
Plot3D[(*SpB[*)Power[x(*|*),(*|*)2](*]SpB*) (*SpB[*)Power[y(*|*),(*|*)2](*]SpB*), {x,0,1}, {y,0,1}] // MMAView 
```

![](./../../../Screenshot%202025-04-22%20at%2014.56.18.png)