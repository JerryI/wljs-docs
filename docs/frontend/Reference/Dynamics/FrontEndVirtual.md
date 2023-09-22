---
env:
  - WLJS
virtual: true
---
It is a virtual [container](../../../interpreter/Advanced/containers.md) wrapper for any expressions evaluated on WLJS

```mathematica
FrontEndVirtual[expr_]
```

## Examples
Most use cases comes, when [WLJS](../../../interpreter/intro.md) is used as a standalone interpreter, but you can simulate it from WLJS Frontend as well using [FrontSubmit](FrontSubmit.md)

*cell 1*
```html
.html
<div id="container"></div>
```

*cell 2*
```mathematica
FrontSubmit[With[{},
	a = Table[{{0,0}, RandomReal[{-1,1}, 2]}, {i, 100}];  
  
	FrontEndVirtual[{  
		AttachDOM["container"];  
		Graphics[{RGBColor[0.0,1.0,1.0],  
		  Table[Line[a[[i]]], {i, Length[a]}]
		}];  
	}];  
  
	(* mix them up *)  
	i = 0;
	While[i < 30,
	  Pause[0.1];
	  a = RandomSample[a];
	  i = i + 1;
	];
] // Offload]
```

Without a container [`Graphics`](../Graphics/Graphics.md) just will not work properly.

<Wl data={`"1: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"`}>{`Graphics[{RGBColor[0.0,1.0,1.0],  Line[Table[{{0,0}, RandomReal[{-1.4,1.4}, 2]}, {i, 100}]]}, ImageSize->500]`}</Wl>

__Adapted from__ [symbols](../../../interpreter/Advanced/symbols.md)

## Dev notes
Now you are reading this documentation pages and see examples with graphics and etc. Most of them are made using just

```mathematica
FrontEndVirtual[With[{},
	AttachDOM["id"];
	Graphics[...]	
]]
```

embedded as a `script` into the HTML tree.