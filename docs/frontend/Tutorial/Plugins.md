---
sidebar_position: 8
---
:::danger
Is in development
:::

WLJS Frontend uses a custom package manager to download, update and store extensions from any suitable Github repo. At the first startup it extracts them to a local `Packages` folder, where one can freely edit and explore them.

The following packages are available for now (from the maintainer @JerryI)

- [wljs-interpreter](https://github.com/JerryI/wljs-interpreter) - [WL interpreter](../../interpreter/intro.md) written in JS is a core component, that controls UI, draws graphics, manages states (bridges WL and WEB). Can be used as a standalone library for building web apps
- [wljs-cells](https://github.com/JerryI/wljs-cells) - the whole frontend, cells operations, cells wrappers. Can be used separately. 
- [wljs-editor](https://github.com/JerryI/wljs-editor) - WL cells editor based on CodeMirror 6. Can be used separately. 
- [wljs-inputs](https://github.com/JerryI/wljs-inputs) - IO library that provides sliders, text-boxes for building simple GUI in the notebook. Can be used separately. 
- [wljs-graphics3d-threejs](https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine) - library for `Graphics3D` based on Three.js. Can also be used as a standalone Javascript library together with `wljs-interpreter`
- [wljs-graphics-d3](https://github.com/JerryI/wljs-graphics-d3) implementation of `Graphics` function and primitives based on `d3.js` and `plotly.js`. Can be used separately
- [wljs-svgbob-support](https://github.com/JerryI/wljs-svgbob-support) adds support of SVGBob diagrams language to `wljs-editor`
- [wljs-mermaid-support](https://github.com/JerryI/wljs-mermaid-support) support for Mermaid.js diagrams language cells
- [wljs-markdown-support](https://github.com/JerryI/wljs-markdown-support) support for markdown language cells
- [wljs-magic-support](https://github.com/JerryI/wljs-magic-support) misc useful features for the editor
- [wljs-js-support](https://github.com/JerryI/wljs-js-support) support for JS cells in the editor with data-binding between WL and JS
- [wljs-html-support](https://github.com/JerryI/wljs-html-support) support for HTML language in the cells with a template engine [WSP](https://github.com/JerryI/tinyweb-mathematica/tree/master/Tinyweb)

You can write you own and there is no need in publishing, unless you want to share your tool with the community. In the last case the only required thing is to provide a link to your public Github repository.

An example of packing your tool is shown as a part of tutorial [Canvas](../Customizing%20IO/Canvas.md).


