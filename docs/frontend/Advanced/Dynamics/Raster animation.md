---
draft: false
---
:::warning
Raster graphics is not well optimized on WLJS Notebook for now. Consider to use it as rarely as possible.
:::

All raster graphics is rendered using [Image](frontend/Reference/Graphics/Image.md) expression, which also supports dynamic updates using [Offload](frontend/Reference/Interpreter/Offload.md) expression.

Let us start from the practical example - __image distortion__

![](./../../../Pasted%20image%2020240514150707.png)
*Yandex Open Source Jam 2024*

or this one

![](./../../../Pasted%20image%2020240514150822.png)
*[Stackoverflow](https://stackoverflow.com/questions/36174431/how-to-make-a-wave-warp-effect-in-shader) OpenGL*

### Implementation
Let us take an example image firstly. Drag and drop it to an editor

![](./../../../Screenshot%202024-05-14%20at%2015.10.37.png)

and take a raw data from it

```mathematica
img = (* image *) // ImageData;
```

Now we can apply map function to it, which stretches and shrinks pixels periodically

```mathematica
shader = Compile[{{img, _Real, 3}, {phase, _Real}}, Module[{iter},
  With[{
    ysize = Length[img],
    xsize = Length[img[[1]]]
  },
    Table[
    iter = 1.0;
    Table[With[{
      yr = y,
      xr = If[# < 1, 1, If[# > xsize, xsize, #]] &@ Round[iter]
    },

      iter = iter + (1.0 + 0.7 Sin[6 Pi x / xsize + phase]);

      Floor[255 img[[yr, xr]]]
      
      
    ],  {x, xsize}], {y, ysize}] 
  ]
]];
```

Here we use `Compile` to speed the process up, since there are only real arrays are involved. We do not apply any antialiasing filters, it does it in the nearest neighbors approximation. Let's check the result

```mathematica
shader[img, 0] // Image 
```

![](./../../../Screenshot%202024-05-14%20at%2015.18.05.png)

Since a performance is it great with raster graphics, we can rely on fixed time intervals while animating or a straight `Do` loop

```mathematica title="cell 1"
imageFrame = img;
Image[imageFrame // Offload]
```

```mathematica title="cell 2"
Do[
  imageFrame = shader[img, angle] // NumericArray;
, {angle, 0, 2Pi, 0.1}]
```

:::tip
Use `NumericArray` wrapper to speed up the parsing for numerical arrays on the frontend and Wolfram Kernel
:::

The resulting animation

![](./../../../goood-ezgif.com-optimize.gif)
