---
env:
  - WLJS
package: wljs-graphics-d3
update: true
source: https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js
---
```mathematica
Inset[_Graphics | _Graphics3D | _Image | _EditorView | _, pos_List, opts___]
```

```mathematica
Inset[_Graphics | _Graphics3D | _Image | _EditorView | _, pos_List, origin_List, size_List, opts___]
```

a graphics object, that allows to put another [Graphics](frontend/Reference/Graphics/Graphics.md), [Image](frontend/Reference/Image/Image.md), [EditorView](frontend/Reference/GUI/EditorView.md), [CellView](frontend/Reference/GUI/CellView.md) or anything else __for which WLJS execution environment makes sense__ into the canvas. 
- `pos` has to be a 2D vector, that specifies the position of the inset in the local coordination system
- `origin` __is optional__ and specifies the coordinates of the pin point in the local coordinate system of enclosing graphics. By the default __it takes the center of calculated size__. Set it to `Center` to achieve the same effect.
- `size` is displayable size in the local coordinate system of parent graphics object (with respect to `Inset`). 





## Options

## Examples

```mathematica
inset = Graphics[{
  LightRed,
  Disk[{0,0},0.1],
  Black, Directive[FontSize->16], Text["Test", {-1/16,-1/30}]
}, PlotRange->{{-1,1}, {-1,1}}];

Plot[x, {x,0,10}, Epilog->{Inset[inset]}]
```

<Wl >{`Plot[x, {x,0,10}, Epilog->{Inset[Graphics[{LightRed,Disk[{0,0},0.1],Black, Directive[FontSize->16], Text["Test", {-1/16,-1/30}]}, ImageSize->350, PlotRange->{{-1,1}, {-1,1}}]]}]`}</Wl>

or put [EditorView](frontend/Reference/GUI/EditorView.md)

```mathematica @
Plot[x, {x,0,10}, Epilog->{Inset[EditorView["(*FB[*)((1)(*,*)/(*,*)(2))(*]FB*)"], {3,5}]}]
```

<Wl>{`Plot[x, {x,0,10}, Epilog->{Inset[EditorView["(*FB[*)((1)(*,*)/(*,*)(2))(*]FB*)"], {3,5}]}, ImageSize->350]`}</Wl>

## Dynamics
The second arguments `pos` that specifies the position of an inset does support updates.