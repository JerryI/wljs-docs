---
env:
  - WLJS
virtual: true
---
It is a virtual [containers-executable](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md#Containers%20Executables) wrapper for any expressions evaluated on WLJS

```mathematica
FrontEndVirtual[expr_]
```

It works similar to [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md), but does not allocate memory and does not assign or create DOM element for displaying (you have to do it manually using [AttachDOM](frontend/Reference/Interpreter/AttachDOM.md)) and __keeps the original expression__

###### Another option
You do not need `FrontEndVirtual` if you add one line to your Javascript code

```js title="change"
...

core.YouSymbol.virtual = true
```

this will tell WLJS Interpreter to automatically make an instance



## Examples
Most use cases comes, when [WLJS](../../../../interpreter/intro.md) is used as a standalone interpreter, but you can simulate it from WLJS Frontend as well using [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md)

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

Without a container [`Graphics`](frontend/Reference/Graphics/Graphics.md) just will not work properly.

<Wl >{`Graphics[{RGBColor[0.0,1.0,1.0],  Line[Table[{{0,0}, RandomReal[{-1.4,1.4}, 2]}, {i, 100}]]}, ImageSize->500]`}</Wl>

__Adapted from__ [symbols](../../../../interpreter/Advanced/symbols.md)

## Dev notes
Now you are reading this documentation pages and see examples with graphics and etc. Most of them are made using just

```mathematica
FrontEndVirtual[With[{},
	AttachDOM["id"];
	Graphics[...]	
]]
```

embedded as a `script` into the HTML tree.