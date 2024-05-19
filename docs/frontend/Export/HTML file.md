
Since the interpretation of the output cells happens in a browser, then we can pack all data into a single `.html` file and easily share it with other people by clicking on the icon

![](../../imgs/Screenshot%202024-03-13%20at%2019.37.13.png)

:::warning
Do not forget to save your notebook before exporting! It is important for garbage collecting
:::

## Portability 
Once exported, an `.html` file can be __unpacked back to a normal notebook__ once opened using WLJS Notebook app. There are some limitations

- no dynamic symbols (used [Offload](frontend/Reference/Interpreter/Offload.md) or [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md)) will be preserved
- no external files, except images will be packaged 
- iconized expressions to a file will be lost

However,

- all static graphs, 2D, 3D graphics are kept
- all external images are kept and embedded to a document (including slides and md)
- [NotebookStore](frontend/Reference/Cells%20and%20Notebook/NotebookStore.md) data is embedded as well
- slides as well as all cell are kept **press `f` to go fullscreen**

You can specify what to include to the bundle and what to exclude in `Settings` menu

![](./../../Pasted%20image%2020240510101914.png)