---
sidebar_position: 2
---
The whole notebook interface is made using plain Javascript, HTML powered by a [Wolfram WebServer](https://github.com/KirillBelovTest/HTTPHandler)  and [WLX](https://jerryi.github.io/wlx-docs/) running locally on a Wolfram Kernel. It means you can work remotely by running a server anywhere you want (see how at [instruction](frontend/instruction.md)).

Some calculations are performed partially by your browser, you can have a control over it, [if you want](frontend/Dynamics.md) . All UI elements, cells operations are written in Javascript and Wolfram Language and performed by WLJS Interpreter

> **WLJS Interpreter** is a tiny (3 kB) Wolfram Language Interpreter running in a browser and written in vanilla Javascript. It fully interconnects Javascript world with Wolfram Language on the server (backend). We will also reference it as *frontend*. 

![](./../imgs/Interface-1.png)

:::info
Compared to Mathematica the cell design has mostly flat structure similar to Jupyter Notebook. Only `input` and `output` cells are joined into groups. 
:::

Output cells are editable. We do not separate them explicitly unlike in Mathematica or Jupyter, since the whole document is a **notebook**, notebooks do not have inputs and outputs. You can freely edit, copy, reevaluate in place any output expression. Therefore we distinguish them only formally.

### Cell control buttons
All cells are grouped by parent input cell, apart from that the structure of the notebook is flat. The controls are applied to the whole group

![](./../imgs/Screenshot%202024-03-13%20at%2018.53.13.png)

From left to right
- add new cell below
- hide an input cell
- evaluate (also `Shift+Enter` combo)
- more

The last options expands into

![](./../imgs/Screenshot%202024-03-13%20at%2018.54.44.png)

Project to a window is the most interesting feature here, that allows to evaluate a cell in a new window. It comes handy while demonstrating [presentations](frontend/Advanced/Slides/Slides.md).

### Shortcuts
*working in both: browser and desktop application*
#### UI
- `Ctrl+S`, `Cmd+S` save notebook
- `Alt+.`, `Cmd+.` abort evaluation
- `Ctrl+P`, `Cmd+P` open command palette
- `Shift+Enter` evaluate current cell
- `Ctrl/Cmd + f` search in the focused cell
- `Shift + Alt + Space` overlay window (Desktop App only)

#### Cells
- `Ctrl+W`, `Cmd+2` hide/show input cell
- `Ctrl+/` make fraction on selected
- `Ctrl+6` make superscript on selected
- `Ctrl+2` make square root on selected
- `Ctrl+-` make subscript on selected
- `Ctrl/Cmd+/` comment a line


## Wolfram Language
When you start typing the language you are using assumed to be WL. By pressing `Shift+Enter` you can start evaluation

![](./../imgs/Screenshot%202024-03-13%20at%2018.58.12.png)

Output cells are joined to the input and the last one can be hidden by clicking on the $\rightarrow$ sign on the left side from the cell.

:::note
Once you change something inside the output cell, it loses its formal parent and becomes new input cell, like in Mathematica.
:::

Syntax sugar, fractions and other 2D input are supported 

![](./../nice.gif)

The most useful commands are listed below

- `Ctrl`+`/` fraction
- `Ctrl`+`^` power
- `Ctrl`+`-` subscript
- `Ctrl`+`2` square root

Or using a special toolbar (snippet)

![](./../plattte-ezgif.com-optimize%201.gif)

Now let us move to some other gems

## Snippets
To help in writing matrixes, colors, and some other useful stuff are accessible by the shortcut `Super/Cmd`+`P`

![](./../imgs/Gizmo-ezgif.com-optipng.png)

![](./../CuboidGizmo-ezgif.com-optipng.png)

All snippets are just special kind of notebooks including all UI elements.

## AI Copilot
See it in action on Youtube Shorts


<iframe width="315" height="560"
src="https://youtube.com/embed/wenBdDRpD4g?si=bB5h28zAHb7r6Nmh"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

<iframe width="315" height="560"
src="https://youtube.com/embed/pXe1mSir47Q?si=UTclXIdPiB3HydPI"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>


## Editor of Power
A single input cell can produce Wolfram Language output, HTML page, Javascript window or a slide of a presentation

![](./../imgs/Dropfiles-ezgif.com-optipng.png)

Or just draw something inside the code editor

![](./../Excalidraw-ezgif.com-speed%201.gif)


## Overlay mode
While running WLJS App (in a tray or normally) press `Shift+Alt+Space` to get quick access to WLJS input cell

![](./../Screenshot%202024-08-25%20at%2016.52.14.png)

See more in [Overlay mode](frontend/Advanced/Prompt%20overlay.md)

## Graphics 2D & 3D
Most Mathematica's plotting functions produces lower-level primitives. The major part of them are supported

<Wl >{`ExampleData[{"Geometry3D","KleinBottle"}]`}</Wl>

:::info
Try to drag and pan using your mouse!
:::

![](./../imgs/Screenshot%202024-03-13%20at%2019.07.00.png)

:::note
Graphics elements are not exported SVG. All primitives are recreated using d3.js and THREE.js from scratch
:::

![](./../rerer-ezgif.com-video-to-gif-converter.gif)

## Realtime calculations

__Dynamics? We have a lot of it__


![](./../WLXwidget-ezgif.com-video-to-apng-converter%201.png)

![](./../RotationMatriix3D-ezgif.com-optipng.png)

__Or may be even fluid simulation?__

![](./../fluid-ezgif.com-video-to-webp-converter.webp)

### Short videos


<iframe width="315" height="560"
src="https://youtube.com/embed/ItXbjNtGlew?si=enz0K6jAu2xv5hAK"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>


Or even with polygons in 3D

<iframe width="560" height="315" src="https://www.youtube.com/embed/LNP1S4-rX3k?si=CcmzvBy2rNlHpajR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Portability
You will probably need to share your notes with someone. Here we have a bunch of options:

1. Export entire notebook as a web-page [Static HTML](frontend/Exporting/Static%20HTML.md), [Dynamic HTML](frontend/Exporting/Dynamic%20HTML.md) 
2. Export individual figures [Figures](frontend/Exporting/Figures.md)
3. Make a presentation [Slides](frontend/Exporting/Slides.md)

![](./../StiticExport-ezgif.com-optimize.gif)

**No internet dependency, it will work permanently and will not be broken by any update in the future** You can always convert back the exported notebook if needed, which is perfect if you want to share your notes on your personal blog.

## Other languages
Of course the notebook interface is impossible to use without text annotation, here you do not need to switch to a different cell type. To use you favorite (or not) Markdown type in the first line of a cell `.md` and magic happens

![](./../imgs/Screenshot%202024-03-13%20at%2019.05.40.png)

By clicking on an arrow on the right, you can hide the source cell and only the output will be displayed. An editor is very flexible you can quite easily add your custom output cell support. 

Or combine WL together with Javascript to visualize your data in incredible way

![](./../imgs/Spark-ezgif.com-speed.png)

The core plugins provides the following cells

- [Javascript](frontend/Cell%20types/Javascript.md)
- [Markdown](frontend/Exporting/Markdown.md)
- [Slides](frontend/Reference/Slides/Slides.md)
- [WLX](frontend/Cell%20types/WLX.md)
- [Files](frontend/Cell%20types/Files.md)
- [HTML](frontend/Cell%20types/HTML.md)
- [Many more](frontend/Cell%20types/Many%20more.md) (Mermaid)

