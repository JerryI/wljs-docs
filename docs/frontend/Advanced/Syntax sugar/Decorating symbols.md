Giving a rich visual representation to a symbol while programming elevates the whole user experience to another level. There is couple of ways on how to do it in WLJS Notebook.

:::info
Read about syntax sugar also in [Symbolic programming](frontend/Symbolic%20programming.md)
:::

## Temporal
One can replace a symbol with an icon by applying [Interpretation](frontend/Reference/Decorations/Interpretation.md). After first evaluation the representation is lost and the true expression will be revealed

```mathematica
Interpretation[Graphics[Circle[], ImageSize->{20,20}, ImagePadding->None], 1]
```

The result is a circle symbol, which can be copied multiple times in any cell

![](./../../../Screenshot%202024-05-02%20at%2023.06.10.png)

:::note
Decoration itself does not modify the original expression. You can check it by pasting the result into any text-editor

```mathematica
(*VB[*)(1)(*,*)(*"1:eJxTTM..."*)(*]VB*)  - 1 
```

:::

### Examples in action
A navigation gizmo [snippet](frontend/Snippets.md) is made using this technique combined with dynamically generated symbols wrapped in [Offload](frontend/Reference/Interpreter/Offload.md)

<details>

![](./../../../Screen%20Recording%20Apr%208%20(3).gif)

</details>

### Using Javascript
One can use a full power of Web to decorate your symbols. For example, create a [Javascript](frontend/Cell%20types/Javascript.md) cell with a following content

```js
.js

core.SmileyDecorator = async (args, env) => {
  const canvas = document.createElement('canvas');
  canvas.width = 50;
  canvas.height = 50;
  const ctx = canvas.getContext('2d');

  // Draw a cool smiley face adjusted to fit the smaller canvas
  ctx.beginPath();
  ctx.arc(25, 25, 20, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(35, 25);
  ctx.arc(25, 25, 8, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(22, 20);
  ctx.arc(20, 20, 2, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(32, 20);
  ctx.arc(30, 20, 2, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();

  env.element.appendChild(canvas);
}
```

The given function will append a canvas with an image to provided element in the context of its execution. To provide this context and force Wolfram Kernel to execute this symbol on [the frontend](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md) use can use [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md) 

```mathematica title="test"
SmileyDecorator[] // CreateFrontEndObject
```

![](./../../../Screenshot%202024-05-02%20at%2023.24.27.png)

Great! Now we can apply similar trick we used earlier

```mathematica
Interpretation[SmileyDecorator[] // CreateFrontEndObject, 1]
```

![](./../../../Screenshot%202024-05-02%20at%2023.26.34.png)


### Magic joystick
We can cover from a user all event bindings and etc providing a symbol, which can be used in dynamics

```mathematica
createDynamic2DSymbol[] := Module[{symbol = {0,0}}, With[{
	eventObject = InputJoystick[],
	helper = InputJoystick`IntegrationHelper[][Function[xy, symbol = xy]]
},
	EventHandler[eventObject, helper];
	Interpretation[eventObject, Offload[symbol]]
]]
```

Then you can create an instance by evaluating this in a new cell
```mathematica
createDynamic2DSymbol[]
```

An output is a joystick

![](./../../../Screenshot%202024-05-04%20at%2013.17.33.png)

Then we need to __cut it and paste into the cell below__

```mathematica
Plot[Sin[x], {x, -5Pi, 5Pi}, Epilog->{
  Disk[ (* paste it here *), 0.5]
}]
```

Once evaluated you will get a controllable [Disk](frontend/Reference/Graphics/Disk.md) by a joystick inside an input cell

![](./../../../Dragdjoy%20GIF%20speed.gif)


*a but more optimized version*

<details>

here we will not spawn additional wrapper widget, the result is the same, but less overhead to an editor

```mathematica
createDynamic2DSymbol[] := Module[{symbol = {0,0}}, With[{
	eventObject = InputJoystick[],
	helper = InputJoystick`IntegrationHelper[][Function[xy, symbol = xy]]
},
	EventHandler[eventObject, helper];
	With[{display = eventObject[[1]]["View"] // CreateFrontEndObject},
		Interpretation[display, Offload[symbol]]
	]
]]
```

Why? See reference on [Interpretation](frontend/Reference/Decorations/Interpretation.md)

</details>

## Permanent
In this way [RGBColor](frontend/Reference/Graphics/RGBColor.md), most mathematical equations, [Graphics](frontend/Reference/Graphics/Graphics.md) and other visual sugar was implemented. For example

```mathematica
Now
Red
```

![](./../../../Screenshot%202024-05-04%20at%2013.51.35.png)

### InterpretationBox
This is a low-level symbol used in [Interpretation](frontend/Reference/Decorations/Interpretation.md), however from temporal decoration we can make a permanent one by defining [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) for [StandardForm](frontend/Reference/Decorations/StandardForm.md) 

#### Morse code
Let us make a syntax sugar for a Morse code! Our __special symbol__ for representing a code will be

```mathematica
morse[code_String]
```

We need conversion rules

```mathematica
morseTable = {"a" -> ".- ", "b" -> "-... ", "c" -> "-.-. ", 
   "d" -> "-.. ", "e" -> ". ", "f" -> "..-. ", "g" -> "--. ", 
   "h" -> ".... ", "i" -> ".. ", "j" -> ".--- ", "k" -> "-.- ", 
   "l" -> ".-.. ", "m" -> "-- ", "n" -> "-. ", "o" -> "--- ", 
   "p" -> ".--. ", "q" -> "--.- ", "r" -> ".-. ", "s" -> "... ", 
   "t" -> "- ", "u" -> "..- ", "v" -> "...- ", "w" -> ".-- ", 
   "x" -> "-..- ", "y" -> "-.-- ", "z" -> "--.. ", " " -> "/ "};

ToMorseCode[text_String] := StringReplace[
  ToLowerCase[text], morseTable]

morse /: TextString[morse[s_String]] := s
```

Now let us make boxes for it

```mathematica
morse /: MakeBoxes[m: morse[s_], f:StandardForm] := With[{
	code = ToMorseCode[s]
},
	InterpretationBox[MakeBoxes[Style[code, 18, Italic], f], m]
]
```

Let's see the result

```mathematica
morse["SOS"]
```

![](./../../../Screenshot%202024-05-03%20at%2022.31.12.png)

We can perform back transformation, since underneath we still have an original expression

![](./../../../Screenshot%202024-05-03%20at%2022.32.11.png)

As the last thing - we can make it audible

```mathematica
silence = Table[0, {t,0,40Pi,0.1}];
dot = Table[Sin[5 t], {t,0,40Pi,0.1}];
dash = Join[dot, dot];


morse /: Play[morse[t_String]] := With[{
  code = ToMorseCode[t]
},
   Join @@ (Switch[#, 
    ".",
      Join[dot, silence],
    "-",
      Join[dash, silence],
    _,
      Join[silence, silence]
  ] &/@ StringSplit[code, ""]) // ListPlay
]
```

```mathematica
morse["SOS"] // Play 
```

![](./../../../Screenshot%202024-05-03%20at%2022.33.28.png)

#### MD5 representation
Another example, that shows how to produce graphical output. 

Here we will visually encrypt any Wolfram Language expression using our custom wrapper symbol for it

```mathematica title="this is our symbol"
secret[any_]
```

Now let's define a representation for it

```mathematica
secret /: MakeBoxes[s: secret[expr_], StandardForm] := With[{hash = Hash[expr, "MD5", "ByteArray"] // Normal},
  With[{im = Image[Partition[Partition[hash, 3],2], ImageSize->50] // CreateFrontEndObject},
    InterpretationBox[MakeBoxes[im, StandardForm], s]
  ]
]
```

:::warning
Apply [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md) on anything related to `Graphics`, `Image` or `Graphics3D` due to a bug in our box system implementation.
:::

And we also need a function to reveal the secret

```mathematica
reveal[secret[expr_]] := expr
```

Here is a demonstration

```mathematica
secret[Plot[x, {x,0,1}]]
```

![](./../../../Screenshot%202024-05-03%20at%2022.49.27.png)

*then simply copy and paste this symbol to a new cell and apply revel function*

![](./../../../Screenshot%202024-05-03%20at%2022.50.34.png)

### ArrangeSummaryBox
There is another built-in function for helping representing objects

:::tip
If you want to hear more about OOP-like objects in Wolfram Language - check this guide [Creating new type](frontend/Advanced/Objects/Creating%20new%20type.md)
:::

For example, we have some symbol with information inside its arguments

```mathematica
specialSymbol[<|"Date"->Now, "Color"->Red, "State"->True|>]
```

Let us decorate it

```mathematica
specialSymbol /: MakeBoxes[obj : specialSymbol[asc_Association], StandardForm] := 
    Module[{above, below},
        above = { 
          {BoxForm`SummaryItem[{"Date: ", asc["Date"]}]},
          {BoxForm`SummaryItem[{"Color: ", asc["Color"]}]}, 
          {BoxForm`SummaryItem[{"State: ", asc["State"]}]}
        };

        BoxForm`ArrangeSummaryBox[
           specialSymbol, (* head *)
           obj,      (* interpretation *)
           None,     (* icon, use None if not needed *)
           (* above and below must be in a format suitable for Grid or Column *)
           above,    (* always shown content *)
           Null (* expandable content. Currently not supported!*)
        ]
    ];
```

The result will look like this

```mathematica
specialSymbol[<|"Date"->Now, "Color"->Red, "State"->True|>]
```

![](./../../../Screenshot%202024-05-04%20at%2012.48.32.png)

*This symbol is still valid for evaluation, what you see is only a syntax sugar*

One can add an icon to it, which we can make dependent on `"Color"` field

```mathematica
specialSymbol /: MakeBoxes[obj : specialSymbol[asc_Association], StandardForm] := 
    Module[{above, below, icon},
        above = { 
          {BoxForm`SummaryItem[{"Date: ", asc["Date"]}]},
          {BoxForm`SummaryItem[{"Color: ", asc["Color"]}]}, 
          {BoxForm`SummaryItem[{"State: ", asc["State"]}]}
        };

        With[{icon = Graphics[{
          Lighter[asc["Color"]], Disk[{0,0}, 1],
          asc["Color"], Disk[{0,0}, 0.8]
        }, 
          ImageSize->{50,50}, 
          ImagePadding->None, 
          Controls->False,
          PlotRange->{{-1,1},{-1,1}}
        ]},

          BoxForm`ArrangeSummaryBox[
             specialSymbol, (* head *)
             obj,      (* interpretation *)
             icon,     (* icon, use None if not needed *)
             (* above and below must be in a format suitable for Grid or Column *)
             above,    (* always shown content *)
             Null (* expandable content. Currently not supported!*)
          ]
        ]
    ];
```

![](./../../../Screenshot%202024-05-04%20at%2012.54.20.png)


:::info
See how to make __dynamic decorations__ in a guide [Creating new type](frontend/Advanced/Objects/Creating%20new%20type.md)
:::

### ViewBox
*a low-level building block used by `Interpretation`, `InterpretationBox`, `ArrangeSummaryBox` and others*

It gives you full control over a decoration. One can event listen events from there and [mutate](frontend/Reference/Decorations/ViewBox.md#From%20Wolfram%20Kernel) inner and outer content of it remotely

#### Simple example
The easiest way of using it to replace an expression with graphics, image or something similar

```mathematica
boxObject[_Real]
```

Lets decorate it

```mathematica
boxObject /: MakeBoxes[boxObject[s_], StandardForm] := With[{
  g = Graphics[{Blue, Disk[{0,0},1], Opacity[0.5], Red,Disk[{0,0},s]}, ImageSize->80, Controls->False, ImagePadding->None]
},
  ViewBox[boxObject[s], g // CreateFrontEndObject]
]
```

:::warning
Normal expressions won't work as a display value in `ViewBox`. They have to be defined as [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md) (graphics functions already implemented and do not count) or wrapped into [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md). 

__If you still want to pass normal wolfram expression and not to care about anything__, please, consider to use [InterpretationBox](#InterpretationBox).

Another reason why `CreateFrontEndObject` is used: what you write as a second argument will end up as a text in a cell. Therefore to avoid such an overhead for an editor if any large graphics data passed we need to pass only the reference to frontend objects storage generated by this (`CreateFrontEndObject`) function.
:::

The result will depend on a value inside an argument of our symbol

```mathematica
Table[boxObject[i], {i,3}]
```

![](./../../../Screenshot%202024-05-01%20at%2016.02.59.png)

__There is still a valid expression inside in InputForm__

We can make frontend beep, once widget has been destroyed

```mathematica
boxObject /: MakeBoxes[boxObject[s_], StandardForm] := With[{
  g = Graphics[{Blue, Disk[{0,0},1], Opacity[0.5], Red,Disk[{0,0},s]}, ImageSize->80, Controls->False, ImagePadding->None],
  uid = CreateUUID[]
},
  EventHandler[uid, {"Destroy"->Beep}];
  
  ViewBox[boxObject[s], g // CreateFrontEndObject, "Event"->uid]
]
```

#### External decorators
One can also use Javascript to decorate a symbol. We will rewrite our `MakeBoxes` for it

```mathematica
boxObject /: MakeBoxes[boxObject[s_], StandardForm] := With[{},
  ViewBox[boxObject[s], customDecorator[s]]
]
```

:::info
Here we did not use [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md), since our decorator function is plain and does not require much space.
:::

Now it comes to a decorator function, which modifies provided DOM element in the current context (where it was called)

```javascript
.js

core.customDecorator = async (args, env) => {
	const state = await interpretate(args[0], env);
	const element = env.element;

	element.classList.add('flex', 'rounded-md', 'p-2');
	element.style.border = "1px solid #999";
	element.style.boxShadow = "inset 0 2px 4px 0 rgb(0 30% 0 / 0.05)";

    element.style.transitionDuration = '0.8s';
    element.style.transitionProperty = 'transform';

    setTimeout(() => {
      element.style.transform = "rotate(360deg)";
    }, 100);

	element.innerText = state;
}
```

Let's check it

```mathematica
boxObject[33]
```

![](./../../../Screenshot%202024-05-04%20at%2013.47.06.png)

One cal also make it dynamic by defining a proper `.update` method for a `customDecorator` (see [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md)). 

