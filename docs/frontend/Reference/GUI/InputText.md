---
env:
  - Wolfram Kernel
origin: https://github.com/JerryI/wljs-inputs
source: https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl
package: wljs-inputs
context: Notebook`Kernel`Inputs`
---
```mathematica
InputText[initial_String, opts___] _EventObject
```

represents an input-text field and returns [EventObject](../Events/EventObject.md)

:::tip
For dynamic read-only indication use [TextView](frontend/Reference/GUI/TextView.md)
:::

## Event generation
Every-time user changes the content, an event __in a form of string__ will be generated
```mathematica
"<current string>"
```

## Options
### `"Label"`
adds a label at the left side to the input text field

### `"Placeholder"`
Text placeholder

### `"Description"`
adds description field to a widget

### `"Topic"`
Specifies which topic or pattern of an event is used

```mathematica
"Topic" -> name_String
```
emits `name` for each time when user types

```mathematica
"Topic" -> {oninput_String, onchange_String}
```
emits `oninput` when any changes occur, while `onchange` is __emitted after__ the users leaves the field

## Example
A simple text input

```mathematica
text = InputText["Hi"]
EventHandler[text, Print];
```

## Dev notes
This is a wrapper for [TextView](frontend/Reference/GUI/TextView.md) view-component
