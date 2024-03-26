---
env:
  - Wolfram Kernel
source: https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl
package: wljs-editor
context: Notebook`Editor`Kernel`FrontSubmitService`
---
asynchronously evaluates (aka [FrontSubmit](FrontSubmit.md)) and fetches the resulting expression back to the Wolfram Kernel from the frontend (browser)

```mathematica
FrontFetchAsync[expr_, opts___] _Promise
```

and returns [Promise](../Misc/Promise.md) object.

## Options
### `"Window"`
specifies a window socket, to which an expression will be sent. Use [CurrentWindow](CurrentWindow.md) to fetch a window object from the evaluation context explicitly.

### `"Format"`
The default expression form used to import raw data acquired from the frontend. It effectively applies `ImportString` on raw JSON data. The possible values
- `"JSON"` (*the default*)
- `"ExpressionJSON"`
- `"Raw"` bypasses and returns a string

## Examples
To read the selected text from a cell and print it to another cell

```mathematica
With[{win = CurrentWindow[], cell = ResultCell[]},
  EventHandler[InputButton["Read selected text"], Function[Null, 
    
      Then[FrontFetchAsync[FrontEditorSelected["Get"], "Window"->win], Function[result,
      CellPrint[result 
        , "After"->cell];
      ]
    ]
  ]]
]
```

or to read a clipboard of a user

```mathematica
With[{win = CurrentWindow[], cell = ResultCell[]},
  EventHandler[InputButton["Read clipboard"], Function[Null, 
    
      Then[FrontFetchAsync[ReadClipboard[], "Window"->win], Function[result,
      CellPrint[result 
        , "After"->cell];
      ]
    ]
  ]]
]
```