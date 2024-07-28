
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

## Hosting notebooks
### Offline mode
This is a default behavior, when it packs all libraries for graphics and ui into a single HTML file. It results in a quite bulky file *~5-15 mb* depending how many things were included (see [Portability](#Portability)), that can work **fully offline**.

### CDN mode
This is can be enabled form the settings menu

![](./../../Screenshot%202024-07-28%20at%2019.11.13.png)

Then the bare minimum of data will be compressed into a single HTML, mostly an actual data of the notebook. It results in a much smaller file size, however, requires an internet connection. We use [JSDelivr](https://www.jsdelivr.com/) to ship all libraries from the corresponding Github repositories. 

Then one can embed a notebook as `<iframe>` into your blog or as a normal static page using services such as [Static App](https://static.app/) for example.


## URL Protocol
See more in [URL Protocol](frontend/Export/URL%20Protocol.md)

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