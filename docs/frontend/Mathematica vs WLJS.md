---
sidebar_position: 7
draft: true
---

import Component from '@site/src/components/wljs-notebook-react/includes';
import Notebook from '@site/src/components/wljs-notebook-react';


From the first sight, it feels similar, however there are some key difference compared to the way how you work with Mathematica's frontend and WLJS.

:::caution
Not even 20% of the functions of Mathematica's frontend were implemented. It is not possible in general due to obvious reasons (paid software, a large team and many years of development process). However, there is no aim to do that. WLJS is a modular system.
:::

## UI & Cells operation
Mathematica is a desktop application (QT-like native built), while WLJS Frontend __is a web-based__ since it runs a web-server to which you connect using any modern browser or special client's app.

WLJS Frontend __is decoupled from the computing (secondary) Wolfram Kernel__. Whatever happens to the secondary Kernel, __it will not lead to the data loss or crash__.

Cell's __structure is flat__ and only groups a list of cells into pairs *input* + *n-output*, while in Mathematica Notebooks it is fully nested.

## Mathematical input
The goal is to make it as close as possible to Mathematica. Most functions are recreated and shortcuts are preserved


<div style={{ width: '50%', float: 'left', clear: 'left' }}>

![](../imgs/Screenshot%202023-07-06%20at%2018.00.15.png)

</div>

<div style={{ width: '50%', float: 'right', clear: 'right' }}>

<Notebook code="H4sIAPaFSmUAA81Y247bOBL9Fa5f4jYsWaTudraBjTHBLtBZDCZAHtZuBLJE20rUkkLJdvfs7r/PKUryLe4eZ5IBxheJZFWxinU5pDSb3Q9ns95bVeT1T3kyVTKq5VRmWW/Ye/W6knGdFjmLs6iq/j7vxSAYOxWVpVRsSTIyT4y8SOS8x1hVP2USXEUZxWn9NGZ8Mu/dznOGz+sk3e6nqYviMA1JG5Ws6zRfVUakFVaHyYm3YvpqqHS1rqEp1rRaJmkdLbTKZZRVsOGWVLFGY/f5WjMG9nadcC42dX202kWdn1mn5EOxlcWmLjdkR/1UkvJG7EW7vlamFVbbFdumcvemeASzxTjjAX6YqvPlLk3q9ZgJUT5O2FqSA7peXGSFGjO1WkR91x0y1x4yxx8yy7Rv4Hi2TLMMM+RFTtF5fMhyWtS6rsvxaLTb7cydbRZqNRKWZY1gybNmalPLqF6zBBO8Y9xhHsuYEbCA6R5+ums0lqviM5keb5SCN6Zk5n7c0AsClZvuYTBLcxlHJYZVscmTU8KnIs0PlNvXIzLlOY/SQi6FdtQE6fYsOa4Le5qn9Qr6yx8S8zLK9+FdQtqo0l8lisVBUI9jynk4ZIeLZbo3k906rWEYCgwSeUE1NCEfGV1q8EmbMVw+TGr5WBtRlq7yMYvJSDUZDf7GFlH8mZaTJ2OmJ5ywwUhbsmtnCSyLSjeFO2HtD/dnqYpPQJZv8uYlRbp8pKqAGDqj+JV53jCNH+G5zxdZeRiGI00mZirN8hGtp33ruGgtZiOZmW2b9lHhypwWYBz5Opc78B5x70PlI/J70LRMMTmuFZS76XYjbaEgQ2jK41GqkjF7QDTVpIySBI42MrlEMC2TcqEb0xjaDTauGOt8gs2lkpVUW4KLfRUvMqxAZ/MRBDimGHIzjA1gzdDC1Rui1d79rQhMJ7bQdGiYhrp/DL1Dogh9JRGeOWZgCJNv4ZfLUvN8Xp9J4pq5pnhZ7oIM51DmaJJWTmLNKvTd++AjilodjeIv8Hfx19Q77oG1XTlkWzpvZnjGHR+czGhNvSim1T0neueYLimcOlge7kOnMQB3HQLQ9f1X9g62BUPbdDMOi4m+5UFmdJ0PoBATuYaY4IOh+CAC0p6RR9Dj2jHtYskIv/uTf/e24/qcvQIaW0uh0IOWps3Fi5HFOPXaQOw1dl9t+zH0NzB/QKE/BEJZ9PQn7eG0I2KqSKWRsU6TRBI81WpDhdXuymeb41Wo1a0lUdHqI4Y+fnxPYJP8Cza/iSppyCjcZJ8Mix040s2/fymWXx8ouHt8oGh6v3OguO50gLUL0/GDgIImOPemDgBM2IElmGu6lud4DAXr+MJmHjH6Aeh24Lj8DsXpBRgNPNt2p5jH9l3mm47HwdR2A9O1AyGwJxJvaHLb89y7biaOpOOuO91rQgK6ImCwyjZ9T1CjMe8/33+UOPucHTtHOGae8FDa0hju33UYvjJJScmZ+d9+FL66Ol4oNGw811ePxQT9LpyAsfEeJWyA3p94xuXYprfcecd9xq1/Nvt6uyGulMaNv8Zx9o8AHxCJnPXDgQ9xQ6k/C3ydQX8hDKQkOk2p78bATkWtorxaFuphzKo4ymRfmJZ+KtPp5ZmW8G0HYAZY9J2pZwqfO3ieavoaGDngLTBpmPqeBywl8OMO4A67uAgsm+HkJGzhTNF3BPgd0/PxRc7iiAnoCz0r7Doi4AKgSh3bDFzuajY9PZAaSApE9mxqT0OgZ+CH7bhtBa5uA2BDQlxXwHTAqRNaAshr2UJjeeh5wZ0wQ8sHPLfkqcCdjOjEcZZ1LQA1TQ1At7lF5sAuyHHb1+OoJdfxSKY1s+3v17Dvtws0PeGH5I129abvOw7vvHPnmnYoXPKm9h5tDtoW8m7o29iWsB9Yx94/ic7v7RTfWKTdJnDe7zYMHIm+fmPSFme3TyCPUkqk5cLyPRunscBb+IYTCTxwCNcylnDrIk7ixHe9k6Q9M6U8fbNTRqgZaFgfdpzDEISRveitzpD/aksMA0/S+s0J+fOlvSkrokQqDZfsqG2kSUaAdO5CLb9W32RJIrP0Yd4bXXROG4F9ZNr3YLevesNZ7x9VVcRpRAPU/WWTSXpZliag9l5do/5VDy/d9oIVns+16EOkPkvCaMMOuLM85SK41lzahae0JKojTesP3r6ZDW76/f7gfUmtn4udVLOf+oP/DW6G+mo8w/N4xCPu+4N7EAc3N/3BcHAz0te+oO79WwxfpmPCLzTh+y+qnon5fPZzeq85vxBnJ8tObY/XadZ4rm0dE5F9yHpN7ZrH5BzvNzSxaZxIKrlt5HTjlFSU1UuRbHYucOgMv78/cXVa0YNDYzC21YdUqUKdBbTGO9QmVshX0GiK//7//je2wqCQbBUAAA==" name="marketing-3814f">marketing-3814f</Notebook>

</div>

There are less complexity involved in an expression representation compared to Mathematica (see more @ [Expressions representation](Expressions%20representation.md)).

:::warning
Navigation between mathematical expressions is currently in development. It does require a mouse pointer to move the cursor inside the inner blocks.
:::

## Input elements
`Slider` and most Mathematica's input elements are replaced with [wljs-inputs](https://github.com/JerryI/wljs-inputs) and event-based approach. Please see [Dynamics](Tutorial/Dynamics.md) and [event-generators](Advanced/event-generators.md) for more information.
## Greek symbols and etc
Use commands `ESC` + `a` (for $\alpha$ symbol)  and pick up a macro from the autocomplete menu.

## Boxes
Some of the boxes are implemented, so you can enjoy syntax sugar of Mathematica.

## Dynamics
There is such thing as `Dynamic` and `DynamicModule` in WLJS Frontend compared to Mathematica. The dynamic binding happens between a specific expressions (__if they support__) and does not cause a full reevaluation - see [Dynamics](Tutorial/Dynamics.md).

It has some its own pros and cons
- `Plot`, `ListLintPlot` __cannot be used directly in dynamic evaluation__, instead [Line](Reference/Graphics/Line.md) and other primitives combined with [Offload](Reference/Dynamics/Offload.md) must be used. Or one can take advantage of modularity and use [ListLinePlotly](Reference/Plotting/ListLinePlotly.md) from the completely different library, that natively supports dynamic updates;
- in general `Line`, `Point` perform faster than in Mathematica;
- dedicated `update` methods for each function gives to a user more flexibility to tune the performance;
- having event-based approach for sliders and other interactive elements allows to construct more complicated pipelines and handle the data efficiently


