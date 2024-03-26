---
env:
  - WLJS
context: Notebook`Interpreter`
source: https://github.com/JerryI/wljs-interpreter/blob/dev/src/Definitions.wl
package: wljs-interpreter
---
```mathematica
ReadClipboard[] _String
```

returns text content of a user's clipboard.

## Example
It is pure WLJS function, which has to be executed using [FrontFetch](../Frontend%20IO/FrontFetch.md) or [FrontSubmit](../Frontend%20IO/FrontSubmit.md)

### Read and alert
We will read it and then make a pop-up message using [Alert](Alert.md)

```mathematica
FrontSubmit[Alert[ReadClipboard[]]]
```

### Read and get back to Wolfram Kernel
Here we use [FrontFetch](../Frontend%20IO/FrontFetch.md) to get the data back to Wolfram Kernel

```mathematica
FrontFetch[ReadClipboard[]] 
```