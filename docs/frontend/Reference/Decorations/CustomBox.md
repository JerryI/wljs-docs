---
env:
  - Wolfram Kernel
---
A helper wrapper to defines custom boxes (like [Style](Style.md) or [Framed](Framed.md)) for an expressions
```mathematica
symbol /: MakeBoxes[symbol, StandardForm] := CustomBox[symbol, Wrapper]
```

where `symbol` is an expression to be decorated using `Wrapper`

## Example
Launch confetti, when an expression appears in the output cell

importour library
```html
.html
<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>
```

define a custom box using JS cells
```js
.js
core._ctime = 0;
core.Confetti = async (args, env) => {
  setTimeout(()=>
  party.confetti(env.element, {
	count: party.variation.range(0, 30),
    speed: 200,
	size: party.variation.range(0.6, 1.4),
  }), 500 + core._ctime * 400);
  //add extra delay
  core._ctime = core._ctime + 1;
}

return '';
```

register a decoration for a symbol `d`
```mathematica
d /: MakeBoxes[d, StandardForm] := CustomBox[d, Confetti]
```

Launch!
```mathematica
Table[d, {i, 5}]
```

