
Since the interpretation of the output cells happens in a browser, then we can pack all data into a single `.html` file and easily share it with other people by clicking on the icon

![](../../imgs/Screenshot%202024-03-13%20at%2019.37.13.png)

![](./../../Screenshot%202024-07-08%20at%2021.57.00.png)

:::warning
Do not forget to save your notebook before exporting! It is important for garbage collecting
:::

Example

![](./../../Screenshot%202024-07-07%20at%2016.29.33.png)

:::info
All dynamic content will be *frozen* at the latest state you have evaluated
:::

## Portability 
Once exported, an `.html` file can be __unpacked back to a normal notebook__ once opened using WLJS Notebook app. There are some limitations

- no external files, except images will be packaged 
- iconized expressions to a file will be lost

However,

- all static graphs, 2D, 3D graphics are kept
- all external images are kept and embedded to a document (including slides and md)
- [NotebookStore](frontend/Reference/Cells%20and%20Notebook/NotebookStore.md) data is embedded as well
- slides as well as all cell are kept **press `f` to go fullscreen**. *Actually there is separate option on how to export slides for printing - see [Export Slides](frontend/Export/Slides.md)*

You can specify what to include to the bundle and what to exclude in `Settings` menu

![](./../../Pasted%20image%2020240510101914.png)