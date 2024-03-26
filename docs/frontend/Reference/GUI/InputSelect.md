---
env:
  - Wolfram Kernel
origin: https://github.com/JerryI/wljs-inputs
context: Notebook`Kernel`Inputs`
package: wljs-inputs
source: https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl
---
```mathematica
InputSelect[{val1_String -> expr1_, val2_String -> expr2_}, defaultval_String] _EventObject
```

represents a select field with different choices

or

```mathematica
InputSelect[{val1_String, val2_String}, defaultval_String] _EventObject
```

is also valid

## Event generation
Emits corresponding `expr` based on user's choice.

## Options
### `"Label"`
Adds a label 
### `"Topic"`
Specifies which topic or pattern of an event is used

