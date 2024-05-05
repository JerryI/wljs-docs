---
draft: false
---
## Summary
### Way 1
Consider to use __to get the highest frame-rate__ and __smooth animations__
- [AnimationFrameListener](frontend/Reference/Graphics/AnimationFrameListener.md) for [Graphics](frontend/Reference/Graphics/Graphics.md) 
- [AnimationFrameListener](frontend/Reference/Graphics3D/AnimationFrameListener.md) for [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md)

with [TransitionType](frontend/Reference/Graphics/TransitionType.md) set to `None` if the calculation time does not exceed the `1/60` of the second. Otherwise consider to use `"Linear"` interpolation option and a small amount of [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) around 10-100 depending on how long it takes to update the data.

### Way 2
Consider to use [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) for a slow animations and simple stuff. Set [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) and [TransitionType](frontend/Reference/Graphics/TransitionType.md) to a proper value to interpolate the values.

Usually if your [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) is let's say `100 ms`, then [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) should be around `100 ms` as well to get *the smoothest animation*.

:::info
See examples in the each reference page
:::

## Creating and removing objects
The most examples given on the pages [Dynamics](frontend/Dynamics.md), [AnimationFrameListener](frontend/Reference/Graphics/AnimationFrameListener.md) considers only changing the attributes of created graphics primitives on the screen. One can also use pure raster graphics together with [Image](frontend/Reference/Graphics/Image.md), however, this is quite cumbersome to deal with. 

However, you have seen [MetaMarker](frontend/Reference/Frontend%20IO/MetaMarker.md), you might know the solution. The technique of selecting already evaluated entities  on the frontend and evaluating or removing other symbols inside its context comes handy here.

### Simple example
Here we will append colorful [Disk](frontend/Reference/Graphics/Disk.md) s to a [Graphics](frontend/Reference/Graphics/Graphics.md) symbol context following the mouse position. As usual the best way to do it is to use white [Rectangle](frontend/Reference/Graphics/Rectangle.md) 😀

```mathematica title="cell 1"
Graphics[{White, EventHandler[Rectangle[{-1,-1}, {1,1}], {"mousemove"->handler}], MetaMarker["canvas"]}, ImagePadding->None]
```

The last thing is to define `handler` function

```mathematica
With[{win = CurrentWindow[]},
  handler = Function[xy, 
    FrontSubmit[{
      Hue[RandomReal[{0,1}], 1,1],
      Disk[xy, RandomReal[{0.01,0.1}]]
    }, MetaMarker["canvas"], "Window"->win]
  ];
];
```

Here we use sort of selector [MetaMarker](frontend/Reference/Frontend%20IO/MetaMarker.md), which makes sure, that the result will be evaluated __in the context of all instances__ marked as `canvas`. The next odd thing is [CurrentWindow](frontend/Reference/Frontend%20IO/CurrentWindow.md). We need this otherwise our anonymous function does not know to which window it should send an expression

![](./../../../Canvas%20Buggles1.gif)

### Animating bubbles
We can go further and not only animate bubbles, but also remove them, when there are to many of them.

The complexity of many instances comes mostly from the fact, that we don't have a direct access from Wolfram Kernel to the frontend, but only WebSockets protocol, which gives a big overhead. The only solution to maintain good performance is to minimize numbers of transactions.

Think about it was a GPU-CPU communication, which also comes with similar restrictions.

#### Pool of objects
This is going to be our buffers

```mathematica
cPool = Table[{0.,0.}, {i,100}]; (* positions *)
vPool = cPool; (* velocities *)
rPool = Table[0., {i,100}]; (* radius or lifetime *)

oPool = Table[Null, {i,100}]; (* references to objects *)
```

The general idea is not to allocate new variables for new object, but rather reuse objects from the pool.

Graphical output is going to be the same

```mathematica
Graphics[{White, EventHandler[Rectangle[{-1,-1}, {1,1}], {"mousemove"->handler}], MetaMarker["canvas"]}, ImagePadding->None]
```

Our future animation loop is going to look like this

```mathematica
With[{win = CurrentWindow[]},
  handler = Function[xy, 
    If[!created[xy, "canvas", win], update[win]];
  ];
];
```

We __don't need to evaluate it now__

An update functions - just go over our arrays and produce new

```mathematica
update[win_] := With[{},
  {cPool, rPool} = Transpose[MapIndexed[Function[{a, index},
    (* if slot is not empty - recalculate *)
    If[oPool[[index//First]] =!= Null,
        
      If[a[[2]] <= 0.002, 
        (* if radius is too small - remove an object *)
        remove[index//First, win];
        a
      ,
        (* if ok - animate *)
        {a[[1]] + 0.05 vPool[[index//First]], 0.9 a[[2]]}
      ]
      
    ,
      a
    ]
    
  ], {cPool, rPool} // Transpose]];
];
```

if a lifetime is close to zero, we need to remove created instance and free some slots in our buffers for new objects

```mathematica
remove[index_, win_] := (
  (* destroy instance on the frontend *)
  Delete[oPool[[index]], "Window"->win]; 
  oPool[[index]] = Null
);
```

And finally a function to create new objects

```mathematica
created[xy_, marker_String, win_] := With[{
  (* find empty slot *)
  slot = FirstPosition[oPool, Null]
},
  If[!MissingQ[slot],
    With[{s = slot // First},

      (* initial positions and etc *)
      cPool[[s]] = xy;
      rPool[[s]] = 0.05;
      vPool[[s]] = RandomReal[{-1,1}, 2];
      oPool[[s]] = True;

      (* update so that object wont appear in an odd way *)
      update[win];

      (* create an instance of Disk on a graph *)
      With[{
        o = {
          Hue[RandomReal[{0,1}],1,1],
                                                (* prevent double updates *)
          Disk[Offload[cPool[[s]]], Offload[rPool[[s]], "Static"->True]]
        }
      },
        oPool[[s]] = FrontSubmit[o, MetaMarker[marker], "Window"->win, "Tracking"->True];
      ];
    ];

    True
  ,
    False
  ]
]
```

The big difference to the previous example [Simple example](#Simple%20example) is that we track our created instances using an options `"Tracking"`, so that we can remove them later for our SVG canvas (aka [Graphics](frontend/Reference/Graphics/Graphics.md))

![](./../../../Bubbles%20video%20to%20gif.gif)

All positions and radiuses are passed in two solid symbols `cPool` and `rPool`, then we only need to perform two data transactions to our frontend, which saves a lot of resources, when it comes to make objects flying on the screen. Because of the payload matters less, than each act of transactions in terms of the transport load. 

