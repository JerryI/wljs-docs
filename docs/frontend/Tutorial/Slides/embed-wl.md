# Embedding WL code

Since it support WLX syntax as well, one can combine the copied text from the normal Wolfram Language cell into a [EditorView](../../Reference/Input/EditorView.md) component.

*prototype*
```jsx
.wlx
CodeInset[str_String] := With[{Fe = EditorView[str] // CreateFrontEndObject},
  <div style="text-align: left;"><Fe/></div>
]
```

Then somewhere on your slide
```md
.slide

# Input cell inside a slide

<CodeInset>
CM6Subscript[B, k_, q_][coords_]:= Sum[ 
  
  With[{\\[Theta] = ToSphericalCoordinates[c][[2]], \\[Phi] = ToSphericalCoordinates[c][[3]]},
    CM6Superscript[(-1), q] CM6Subscript[a, k][Norm[c]] CM6Sqrt[CM6Fraction[4Pi, 2k + 1]] SphericalHarmonicY[k,-q, \\[Theta], \\[Phi]]
  ]
  
, {c, coords}]</CodeInset>

```

:::info
There is no need in writing `CM6Subscript` and etc. manually, this is a representation of cell's elements (Boxes) from a normal WL editor. __Just copy the text__ from the corresponding input/output cell
:::

The result will look like this

![](../../../Screenshot%202023-11-02%20at%2010.18.16.png)

