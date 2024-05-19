---
env:
  - Wolfram Kernel
package: wljs-editor
context: Notebook`Editor`Kernel`FrontSubmitService`
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl
---
```mathematica
CurrentWindow[] _WindowObj
```

returns a window socket object from the evaluation context. The object corresponds to the current socket channel used for the communication with a window, where a cell is evaluated. 

### Implementation
```mathematica
CurrentWindow[] := WindowObj[
	<|"Socket"->Global`$EvaluationContext["KernelWebSocket"]|>
]
```


It is used by [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md), [FrontFetch](frontend/Reference/Frontend%20IO/FrontFetch.md) and [FrontFetchAsync](frontend/Reference/Frontend%20IO/FrontFetchAsync.md)
