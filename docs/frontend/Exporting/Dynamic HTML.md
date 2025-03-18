__A user does not need any app installed to drag some sliders in your notebook__

:::tip
Please, read the manual carefully
:::

This is a dynamic version of exporter [Static HTML](frontend/Exporting/Static%20HTML.md), which is aimed to recreate full interactivity of the normal notebooks

![](../../imgs/Screenshot%202024-03-13%20at%2019.37.13.png)

![](./../../Screenshot%202024-08-03%20at%2013.58.42.png)

## Use cases
- All use cases of [Static HTML](frontend/Exporting/Static%20HTML.md)
- Demonstration project
- Live animation of some physical process
- Interactive presentations / lecture notes

## How it works
It order to make the system more general and be able to capture the effects of [ManipulatePlot](frontend/Reference/Plotting%20Functions/ManipulatePlot.md), any combinations of [InputRange](frontend/Reference/GUI/InputRange.md), [InputButton](frontend/Reference/GUI/InputButton.md), [Offload](frontend/Reference/Interpreter/Offload.md), [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md), [EmitSound](frontend/Reference/Sound/EmitSound.md) and many more it is abstracted by the design from the controlling elements and purely analyses the events in the system, mutations of symbols and etc.

> It requires the architecture of your dynamic system, which follows the principle of *call and response*, i.e. it must generate (by a user or automatically) an event from the input element or any other code on the frontend and then generate the corresponding response as a mutations of symbols or sent command ([FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md)).

:::note
TLDR; We record the calculated data for all possible combinations of input elements used and store it in a large table. See how to do this in [How to use](#How%20to%20use) section
:::

<details>

### Analysis
To analyze all binding between the input elements, symbols and commands fired by Wolfram Kernel during the runtime __we inject a spy to the evaluation kernel__ by modifying `DownValues` of symbols standing for WLJS IO transport. It captures all symbols mutations caused by external events as well as submitted commands like [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md) or [EmitSound](frontend/Reference/Sound/EmitSound.md) (uses `FrontSubmit` implicitly). For example [PlotlyAnimate](frontend/Reference/Plotly/PlotlyAnimate.md) also relies on [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md) and can be captured.

After all data has been collected we forward it to samplers, virtual state machines...

### Processing
Under the hood we use different techniques to process the data depending on the user-case, which are chosen automatically. We call such processors *Black Boxes* or virtual machines.

> aka black boxes from air-planes used to records all data to later reconstruct the flight after the crash

There are 3 kinds of virtual machines we use (picked automatically based on the results on analysis) with funny names
#### State Machine
It has a state, which is determined by the combination of all input elements. When state changes it dispatches a corresponding symbol mutation. It does automatic sampling of all possible states using the given data before processing it further.

#### Pavlov Machine
aka [Pavlov Dog](https://en.wikipedia.org/wiki/Classical_conditioning), it does not have a state. It basically records pairs of *event* - *FrontSubmit calls*.

#### Animation Machine
Detects a series of symbols mutations caused by the same event and records the whole series (typically an animation made using `AnimationFrameListener`). It does not have a real state, only an abstract frame number


> We plan to introduce basic a few kB CNN networks as an option to compress the mutations more efficiently in the future.

</details>

## How to use
Please follow the steps listed below 
### Prepare notebook
Connect to Wolfram Kernel, do normal evaluation of your dynamics. Try to minimize the number of input elements and their possible states. For example, do not put 3 slider ([InputRange](frontend/Reference/GUI/InputRange.md)) with 100 steps for each. If you use [ManipulatePlot](frontend/Reference/Plotting%20Functions/ManipulatePlot.md), specify explicitly `step` for your parameters. The same counts for number and size of used dynamic symbols.

:::ti[]
If you record an animation constructed using [AnimationFrameListener](frontend/Reference/Graphics/AnimationFrameListener.md), start it __right before going to the next step__. Note, that the effects of [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) will not be captured at all. 
:::

For example, we can try [ManipulatePlot](frontend/Reference/Plotting%20Functions/ManipulatePlot.md) with a single slider for the simplicity

```mathematica @
ManipulatePlot[{

  (*TB[*)Sum[(*|*)(*FB[*)((Sin[2\[Pi](2j - 1) x])(*,*)/(*,*)(2j - 1))(*]FB*)(*|*), {(*|*)j(*|*),(*|*)1(*|*),(*|*)n(*|*)}](*|*)(*1:eJxTTMoPSmNiYGAoZgMSwaW5TvkVmYwgPguQCCkqTQUAeAcHBQ==*)(*]TB*) ,  (*TB[*)Sum[(*|*)(*FB[*)((Cos[2\[Pi](2j - 1) x])(*,*)/(*,*)(2j - 1))(*]FB*)(*|*), {(*|*)j(*|*),(*|*)1(*|*),(*|*)n(*|*)}](*|*)(*1:eJxTTMoPSmNiYGAoZgMSwaW5TvkVmYwgPguQCCkqTQUAeAcHBQ==*)(*]TB*) 

}//Re, {x, -1,1}, {n, 1,10,1}]
```

### Sniffing phase
Click `Share` and pick `Dynamic Notebook`, it will automatically initiate recording. A widget should appear in the top-right corner

:::info
If you record an animation. Just evaluate the corresponding cell, wait some reasonable number of frames you want to be recorded, then click `Continue` on the widget
:::

![](./../../Screenshot%202025-03-18%20at%2013.26.19.png)

Now drag a slider in all ranges. It is important to cover all positions of it, since while sampling phase it will only use values it had during [Sniffing phase](#Sniffing%20phase).

:::tip
If you have multiple input elements (2, 3 sliders). Drag each individually in full range __one time__. Cross combinations are not necessary, since they will be sampled automatically recursively on the next stage by the system.
:::
### Sampling phase (State Machine)
Now it will samples all combinations automatically, it might take some time depending on how many states and symbols were changed

![](./../../Screenshot%202025-03-18%20at%2013.36.29.png)

This is the last stage. On the next step it will export your notebook with this data to your drive if no other recordings are required. Click `Continue`

### Result
Depending on how many sampling points you have, the average file size is about `7-20` MB and `3-15` MB of you set `CDN` in the settings (see [Static HTML](frontend/Exporting/Static%20HTML.md)). An example above costs only `165` kB uncompressed and `50` kB compressed data.

The result is fully interactive widget working offline without internet connection and  Wolfram Kernel at all ✨

![](./../../statemachine-ezgif.com-optimize.gif)

:::note
It will work on [Slides](frontend/Cell%20types/Slides.md), [WLX](frontend/Cell%20types/WLX.md) cells as well
:::

## What else can be exported?
Here is a list of what you can export

### State Machine

```mathematica
Manipulate[Series[Sin[x], {x,0,n}], {n,1,10,1}]
```

```mathematica
ManipulatePlot[f[w x], {x,-10,10}, {w,0,10}, {f, {Sinc, Sin}}]
```

Or custom dynamics

```mathematica
radius = 1.0;
Graphics[{Hue[radius // Offload], Disk[{0,0}, radius // Offload]}, ImageSize->Small]

EventHandler[InputRange[0,1,0.1], (radius = #)&]
```

### Pavlov Machine

```mathematica
EventHandler[InputButton[], (Sound[SoundNote["C5"]] // EmitSound)&]
```

And even [Plotly](frontend/Reference/Plotly/Plotly.md)

```mathematica
p = Plotly[{<|
	"values" -> {19, 26, 10}, 
	"labels" -> {"Residential", "Non-Residential", "Utility"}, 
	"type" -> "pie"
|>}]

EventHandler[InputRange[0,100,10], PlotlyAnimate[p,   
  <|"data" -> {<|"values" -> {19, 26, #}|>},
    "traces" -> {0}
  |>, <||>]&
]
```

### Animation Machine

A balls falling from the staircase

```mathematica @
ballsteps = 
  NDSolve[{x''[t] == 0, y''[t] == -9.8, y[0] == 6, y'[0] == 0, 
    x[0] == 0, x'[0] == 1, a[0] == 5, 
    WhenEvent[Mod[x[t], 1] == 0, 
     If[a[t] > 0, a[t] -> a[t] - 1, "RemoveEvent"]], 
    WhenEvent[
     y[t] == a[t], {x'[t], y'[t]} -> .9 {x'[t], -y'[t]}]}, {x, y, 
    a}, {t, 0, 15}, DiscreteVariables -> {a}];
trajectory = {x, y} /. ballsteps[[1]];

staircase = 
 Plot[Clip[Floor[6 - x], {0, Infinity}], {x, -1, 15}, Filling -> 0, 
  Exclusions -> None];

Module[{
  frame = CreateUUID[],
  pos = {0.,0.},
  t = 0.
},
  EventHandler[frame, Function[Null,
    pos = #[t] &/@ trajectory;
    t = If[t >= 15.0, 0., t + 0.1];
  ]];

  Show[staircase, Graphics[{
    (*VB[*)(RGBColor[1, 0, 0])(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRCeGJAIcndyzs/JLwouTyxJzghJzS3ISSxJTWMGyXMgyRcxgMEHeyiDgQHOAAALpBNd"*)(*]VB*), Disk[pos // Offload, 0.12]
  }], Epilog->{
    AnimationFrameListener[pos // Offload, "Event"->frame]
  }]
]
```

## Online examples
See some interactive examples from __our blog page__ and demonstration project
- [TDS-THz in 10 lines](https://jerryi.github.io/wljs-docs/wljs-demo/mid-thz-tds/)
- [Why fitting the raw data is so important](https://jerryi.github.io/wljs-demo/fitting_tds_ppt.html)

