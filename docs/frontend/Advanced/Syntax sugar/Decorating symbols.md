Giving a rich visual representation to a symbol while programming elevates the whole user experience to another level. There is couple of ways on how to do it in WLJS Notebook.

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

![](./../../../Screen%20Recording%20Apr%208%20(3).gif)


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

## Permanent
In this way [RGBColor](frontend/Reference/Graphics/RGBColor.md), most mathematical equations, [Graphics](frontend/Reference/Graphics/Graphics.md) and other visual sugar was implemented.