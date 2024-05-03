---
draft: false
---
One can combine the power of [Interpretation](frontend/Reference/Decorations/Interpretation.md) and [Offload](frontend/Reference/Interpreter/Offload.md) to generate dynamic symbols, which can be controlled by its syntax sugar or decoration box!

## Easy solution
Use [``Offload`FromEventObject``](frontend/Reference/Interpreter/OffloadFromEventObject.md) expression to transform any [InputRange](frontend/Reference/GUI/InputRange.md), [InputText](frontend/Reference/GUI/InputText.md), [InputJoystick](frontend/Reference/GUI/InputJoystick.md) into a dynamic symbol

It feels similar to what Mathematica's dynamic keyword produce

```mathematica title="evaluate"
Offload`FromEventObject[InputRange[-1,1,0.1]]
```

__cut and paste it into__

```mathematica
Rectangle[{-1,-1}, {(*here*), 1}]
```

![](./../../../Generated.mov%20to%20GIF%201.gif)

## Advanced

:::warning
It is written yet properly
:::

Consider to use the following symbols to trick a user

- [FrontEditorSelected](frontend/Reference/Interpreter/FrontEditorSelected.md)
- [Interpretation](frontend/Reference/Decorations/Interpretation.md)
- [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md)
- [ViewBox](frontend/Reference/Decorations/ViewBox.md)
- [Offload](frontend/Reference/Interpreter/Offload.md)

