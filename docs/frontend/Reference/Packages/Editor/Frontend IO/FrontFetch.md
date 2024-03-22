---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl
package: wljs-editor
context: Notebook`Editor`Kernel`FrontSubmitService`
---
is a synchronous version of [FrontFetchAsync](FrontFetchAsync.md), that uses [`WaitAll`](../../Misc/Promise.md#`WaitAll`) to pause an execution while waiting for an incoming data

:::danger
It is not recommended to use synchronous version, since it blocks an event loop and can prevent receiving the data from external sources which affects the work of [Promise](../../Misc/Promise.md) module. 
:::