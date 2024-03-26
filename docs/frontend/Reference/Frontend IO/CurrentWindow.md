---
env:
  - Wolfram Kernel
package: wljs-editor
context: Notebook`Editor`Kernel`FrontSubmitService`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl
---
```mathematica
CurrentWindow[] _CSocketObject
```

returns a window socket object from the evaluation context. The object corresponds to the current socket channel used for the communication with a window, where a cell is evaluated. 

### Implementation
```mathematica
CurrentWindow[] := Global`$EvaluationContext["KernelWebSocket"]
```


It is used by [FrontSubmit](FrontSubmit.md), [FrontFetch](FrontFetch.md) and [FrontFetchAsync](FrontFetchAsync.md)
