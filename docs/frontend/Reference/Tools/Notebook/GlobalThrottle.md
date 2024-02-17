---
env:
  - WLJS
---
```mathematica
GlobalThrottle[time_]
```
sets a throttling value for event generators such as [InputText](../../Inputs/InputText.md), [InputRange](../../Inputs/InputRange.md) and etc, so that they will not fire too often overloading the Wolfram Kernel.

Use `time`  as a number of `ms`, that specifies the minimal delay between two generated events.

Default values is `30 ms`