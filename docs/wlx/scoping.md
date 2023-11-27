---
sidebar_position: 3
---
# Scoping

import Theme from './theme.js';
<Theme></Theme>

As a precursor to the ideas of [components](components.md) is automatic scoping. Anything declared within the `.wlx` script is wrapped into a `Module` automatically. You can control this behavior using option

```mathematica
ProcessString[codeString, "Localize"->True]
```

```jsx title="codeString"
Word = RandomWord[];
<Word/>
```

__`Word` is unique every-time__, when a string processor called.

## Garbage collection
Unfortunately there is no clear way of purging the symbols created by `Module`, therefore they are collected into a symbol

```mathematica
JerryI`WLX`Private`garbageCollection
```

It is up to the user when and how clear them. 

:::warning
There is no built-in method to purge unused symbols  automatically, since symbols might be needed for the current connection or session, which 100% depends on your application.
:::