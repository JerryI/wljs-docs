---
env:
  - WLJS
  - Wolfram Kernel
---
```mathematica
Beep[] | Beep[_]
```

make a sound notification. It does not require any context or window object.

## Example
Click on this button to make sound

```mathematica
EventHandler[InputButton[], Beep]
```

