---
sidebar_position: 6
---
:::warning
Still populating with a content
:::


## Use shortcuts
It improves user experience drastically
### UI Operations
- New notebook `Cmd+N`, `Ctrl+N`
- Open file `Cmd+O`, `Ctrl+O`
- Save `Cmd+S`, `Ctrl+S`
- Enter command palette `Cmd+P`, `Ctrl+P` 
- Hide/Unhide current cell `Cmd+2`, `Ctrl+W`
- Clear outputs `Cmd+U`, `Alt+U`
### Evaluation
- Evaluate `Shift+Enter`
- Abort `Cmd+.`, `Alt+.`
- Evaluate initialization cells `Cmd+I`, `Alt+I`

## Keep folders organized
Various functions may produce [Iconize](frontend/Reference/Decorations/Iconize.md) objects, for storing large chunks of data, which are copied to `./.iconized/` folder in the notebook directory. Any dropped images or files will be uploaded to `./attachments/` directory. Therefore it is important to have a clear separation between your projects.

## Use `NotebookStore` for portability 
If you want your notebook to be exported to a single editable `.html` [HTML file](frontend/Export/HTML%20file.md), use [NotebookStore](frontend/Reference/Cells%20and%20Notebook/NotebookStore.md) as a persistent storage for your raw data. In such case all images, graphs, and stored data will be kept.

## Install everything locally
We promote the idea of storing libraries or paclets for Wolfram Language locally for each project. There is no other way to provide the reliable way of computing, storing data, reproducibility and independence from any remote resources

```mathematica title="example of a built-in package manager"
PacletRepositories[{
    Github -> "https://github.com/KirillBelovTest/GPTLink"
}]

<<KirillBelov`GPTLink`
```

this will create a folder with all used paclets and keep them up to date if needed

