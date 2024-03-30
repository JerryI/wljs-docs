---
env:
  - WLJS
package: wljs-editor
source: https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl
context: Notebook`EditorUtils`
---
Manipulates the last selected input cell's editor

```mathematica
FrontEndEditorSelected[op_String, Null | data_String] Null | _String
```


:::warning
This has to be executed in WLJS interpreter, i.e. using [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md) or [FrontFetchAsync](frontend/Reference/Frontend%20IO/FrontFetchAsync.md)
:::
## op
There are following operations available

### `"Get"`
Returns __selected string__. For example

```mathematica
With[{win = CurrentWindow[]},
  EventHandler[InputButton[], Function[Null, 
    
      Then[FrontFetchAsync[FrontEditorSelected["Get"], "Window"->win], Function[result,
        Print[result];
      ]
    ]
  ]]
]
```

### `"Set"`
Inserts or replaces selected text with a provided string

```mathematica
With[{win = CurrentWindow[]},
  EventHandler[InputButton["Replace"],
    Function[Null, 
      FrontSubmit[FrontEditorSelected["Set", "Yo"], "Window"->win];
    ]
  ]
] 
```

### `"Evaluate"`

:::danger
Not implemented
:::