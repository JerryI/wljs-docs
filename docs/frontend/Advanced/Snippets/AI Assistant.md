## Tips

### Ask to fix any errors
When your cursor is inside a cell (no matter *javascript*, *wolfram language* or whatever), AI can have an access to it. Ask it to fix errors. 

### Say "do it" in a single message
if assistant hesitates to apply changes to your cell and prints changes to a chat

### Mention "current cell" or "in my cell"
to force AI assistant to check the current cell, where the cursor is located rather than a context of a chat

### Ask to print a new cell one
if your assistant shows a code example or solution in the chat, but not to the notebook

## Note on cell types
An assistant is aware of being in a notebook environment. The following cell types are described well in the initial system prompt

- [Wolfram Language](frontend/Cell%20types/Wolfram%20Language.md)
- [Javascript](frontend/Cell%20types/Javascript.md)
- [HTML](frontend/Cell%20types/HTML.md)
- [Slides](frontend/Cell%20types/Slides.md)
- Mermaid diagrams

We also include the differences between Wolfram Mathematica and WLJS Notebook to the initial prompt including [Dynamics](frontend/Dynamics.md), [InputButton](frontend/Reference/GUI/InputButton.md), [InputRange](frontend/Reference/GUI/InputRange.md), [ManipulatePlot](frontend/Reference/Plotting%20Functions/ManipulatePlot.md) and some of the [Events](frontend/Reference/Misc/Events.md) system features.

