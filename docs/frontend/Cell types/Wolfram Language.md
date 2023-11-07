---
sidebar_position: 1
---

import Notebook from '@site/src/components/wljs-notebook-react';

__[Github repo](https://github.com/JerryI/wljs-editor)__

When you open an editor and __start typing__, the following happens
1. each character is send to a server and updates the cell (autosaving)
2. editor tries to figure out the language or a cell type 
3. considering (2) it changes the highlighting and autocomplete / other plugins

In this sense your input cell is __an ultimate tool__.

:::tip
To specify the type of a cell - use a prefix in the first line of the cell
```markdown
.md
# Hello
```
it can be anything `**.**` the behavior is defined by language processors shipped via packages installed (see [Static Evaluation](../Evaluation/Static.md))

**Think about it if it was an anonymous file**
:::

For example

<Notebook code="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" name="aridity-18185">aridity-18185</Notebook>

Then whatever you typed, you should press `Shift-Enter` to make magic happens.

:::info
Input cell is a universal text-field and cannot be customized. Output cells can be different and customized via plugins / packages.
:::

Wolfram Language cells support code with built-in syntax highlighting, graphics or any other interactive objects, syntax sugar (fractions) and etc.

## Syntax highlighting
Depending on the language you specify at the first line, it will highlight HTML, Markdown or Javascript. Wolfram Language autocomplete and highlighting can be extended using external packages.

Once you define something in Wolfram Kernel session, the corresponding symbol will appear in the autocomplete window.

## Syntax sugar
All "heavy" objects are represented as

```mathematica
FrontEndExecutable["uid"]
```

where `uid` is an identifier for the Objects storage. In the normal conditions you will never see it. Basically any `Graphics`, `Graphics3D` are packed to such construction to prevent slow-down caused by many symbols stored in the editor.

For the lightweight objects it uses inline representation, for example
```mathematica
data // Iconize
```

will result in
```mathematica
FrontEndInlineExecutable["compressed data"]
```

All mathematical expressions, colors, dates objects are wrapped using specific tags, allowing to emulate 2D equation typing 

```mathematica
(*FB[*)(((*SpB[*)Power[E(*|*),(*|*)-(*FB[*)(((*SpB[*)Power[x(*|*),(*|*)2](*]SpB*))(*,*)/(*,*)(2))(*]FB*)](*]SpB*))(*,*)/(*,*)((*SqB[*)Sqrt[2\[Pi]](*]SqB*)))(*]FB*) 
```

becomes in the editor

<Notebook code="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" name="marketing-3814f">marketing-3814f</Notebook>

:::info
All equations typed in the editor are compatible with any WL parser,  i.e. can be used in `wolframscript`, since the syntax sugar and the structure is localized inside comments

For example

$$\sqrt{2\pi}$$

```mathematica
(*SqB[*)Sqrt[2\[Pi]](*]SqB*)
```
is safe for copying to anywhere outside the WLJS ecosystem
:::

The following shortcuts are used for equations typing

- `Ctrl-2` - place a square root on the selected text
- `Ctrl-/` - make a fraction
- `Ctrl--` - make a subscript
- `Ctrl-6` - make a superscript (power)

You can also make your own custom representation of your symbol like in Mathematica using `MakeBoxes`. Please see [InterpretationBox](../Reference/Decorations/InterpretationBox.md), [Interpretation](../Reference/Decorations/Interpretation.md) and [MakeBoxes](../Reference/Decorations/MakeBoxes.md)