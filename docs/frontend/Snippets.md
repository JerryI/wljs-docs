---
sidebar_position: 5
---

The big power of customization comes with a snippets system. This is provided by a [plugin](https://github.com/JerryI/wljs-snippets) shipped with a core package.

Snippets are dedicated cells of Wolfram / [WLX](frontend/Cell%20types/WLX.md) / [Javascript](frontend/Cell%20types/Javascript.md) which serve a single utility function. __They are available from the command palette__ and have an access to your notebook and computational Kernel. You can see their source notebook as well as short documentation by clicking on a question mark symbol

![](./../snippetsover.png)
:::tip
Use a shortcut for command palette `Cmd + P` or `Ctrl + P`
:::

## Uploading data
There are a few snippets used for uploading ASCII data or any arbitrary files to the folder of your notebook

![](./../Screen%20Recording%20Apr%208.gif)

This snippet was built using regular Wolfram Language.

## Matrix helper
To make it easier for typing matrixes, one can use the following snippet

![](./../Screen%20Recording%20Apr%208%20(1).gif)

This snippet inserts the given matrix into the cell __where your last cursor was__. A snippet was made using [WLX](frontend/Cell%20types/WLX.md) cells for better customized look.

## Show available options
This snippet analyses the content of your cell __from the left of your cursor position__ and prints `Options` for a given symbol

![](./../Screen%20Recording%20Apr%208%20(2).gif)

:::tip
Drop a cursor in the middle of a symbol of interest. You can select and edit option values inside the picker
:::

:::warning
Not all options are supported for a standard library symbol of Wolfram Mathematica
:::


## Navigation gizmo
This feature is aimed to slightly blur the line between code  and traditional GUI interface approaches for 2D/3D graphics design

![](./../Screen%20Recording%20Apr%208%20(3).gif)

It utilizes the dynamic reevaluation features of WLJS Notebook as well as powerful syntax sugar of an input editor.

1. Select 2D or 3D list of coordinates `{}`
2. Type `gizmo...` in the command palette 
3. Evaluate the cell
4. Drag gizmo to the desired position and click on a check mark

It can also work in principle for most primitives

![](./../Screen%20Recording%20Apr%208%20(4).gif)

Or for 3D primitives as well

![](./../Screen%20Recording%20Apr%208%20(5).gif)

## Format Wolfram Language code
This is also a code formatter available

![](./../Screen%20Recording%20Apr%208%20(6).gif)

__It acts on a selected text or on the entire cell__ if nothing is selected

## OpenAI chat
If nothing is selected, __the given text in the command palette is sent to ChatGPT__ and the result is given as a set of markdown and code cells

![](./../GIF%20speed%20changer.gif)

:::note
It will ask you for a OpenAI API Key. You need to issue it first on the official openAI website
:::

:::warning
This is an experimental feature
:::

