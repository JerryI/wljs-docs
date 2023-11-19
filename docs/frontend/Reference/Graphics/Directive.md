---
draft: false
update: false
---
Used for styling plots or 2D graphics

```mathematica
Directive[opts__]
```

The support is quite limited compared to Mathematica's implementation
## Examples
### Ticks of a plot
One can provide a font-size parameters

```mathematica
Plot[Sin[x], {x,0,2Pi}, FrameTicksStyle->Directive[FontSize->16], Frame->True]
```

<Wl>{`Plot[Sin[x], {x,0,2Pi}, FrameTicksStyle->Directive[FontSize->16], Frame->True, ImageSize->350]`}</Wl>

### FrameLabel style
The same is valid for the labels

```mathematica
Plot[Sin[x], {x,0,10 Pi}, FrameStyle->Directive[FontSize->16], Frame->True, FrameLabel->{"x-axis", "y-axis"}]
```

<Wl>{`Plot[Sin[x], {x,0,10 Pi}, FrameStyle->Directive[FontSize->16], Frame->True, FrameLabel->{"x-axis", "y-axis"}, ImageSize->350]`}</Wl>