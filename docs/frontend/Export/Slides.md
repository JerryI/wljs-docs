Any presentation made using [Slides](frontend/Cell%20types/Slides.md) cells can be exported with dynamic content using [HTML](frontend/Export/HTML.md) exporter or statically to PDF.

> Here is the second option `Slides only`

![](../../imgs/Screenshot%202024-03-13%20at%2019.37.13.png)

![](./../../Screenshot%202024-07-08%20at%2021.56.30.png)

:::warning
Do not forget to save your notebook before exporting! It is important for garbage collecting
:::

:::tip
Make sure to save you notebook beforehand and evaluate your slide cell. *If you have many slide cells - merge them by creating `.slides` cell at the top of your notebook*
:::

It will export an `.html` file, which can be opened using any browser and printed directly. Each slide or fragment is a separate PDF page

![](./../../Screenshot%202024-07-08%20at%2022.05.34.png)

:::info
All dynamic content will be *frozen* at the latest state you have evaluated
:::