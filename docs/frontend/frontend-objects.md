# Frontend Objects

This is one of the key-element of the interpreter and [frontend](https://github.com/JerryI/wolfram-js-frontend). In general it can be decribed as
- a pointer to the sharable storage for the WL expressions on frontend/server
- a [[Decorations]]  - (possibly) displayable interactive object in the notebook cell

The __general definition__ will be
> *an isolated container, where the [frontend functions](Frontend%20functions.md) can be executed*
> > one can also use virtual containers see [[Frontend functions#Virtual containers]]

In this regard all graphics are frontend objects. Any code you want to *store and compute* purely on frontend are frontend objects.

To have an overview of all function - see [Reference](Docs/Reference.md)

## As a decoration
The direct representation of it is

```mathematica
FrontEndExecutable["uid"]
```

CodeMirror 6 finds this pattern and replace it with a corresponding frontend object as a [[Decorations]] and executes it immediately using [WLJS Interpreter](https://github.com/JerryI/wljs-interpreter). For example, on the server ==WL Kernel converts before sending to the frontend the result== to

```mathematica
Graphics3D[...] <-> FrontEndExecutable["uid"]
```

To define your own function like this see - [[Writting WebObject]]. **I.e. registered graphics objects (2D, 3D, sliders...) automatically create frontened objects of themself**. 

The process happends in `Kernel/Evaluator.wl` on the secondary kernel only according to the tables generated by `Kernel/WebObjects.wl`.  

More information about the evalution cycle - [Evaluation](Evaluation.md).

In principle it looks quite simmilar to Mathematica's `MakeBoxes` feature, where you can define a view for the any arbitary object. For example, `EventObject` uses quite simmilar approach (see [[Events]], [Evaluation](Evaluation.md)), where there is an upvalues definition

```mathematica
CM6Form[EventObject[assoc_]] ^:= CreateFrontEndObject[assoc["view"]] 
```

where `CM6Form` is applied at any visible cell's output. That's why if you create a slider and just print it it will show a real slider you can drag. 

The replaced function is stored separately in objects storage in ExpressionJSON format. After the evaluation `Kernel/Evaluator.wl` returns `ExtendDefinitions[Global'$NewDefinitions]` to the master kenrel, that extends the object storage in the given notebook

It can also hapend in the opposite direction, where the a new kernel is looking for some objects, it will ask the master kernel to provide one.

Our frontened (in a browser) can ask for those object using `NotebookGetObject["uid"]`, that happends automatically, when the [WLJS Interpreter](https://github.com/JerryI/wljs-interpreter) executes `FrontEndExecutable["uid"]` invoked by CodeMirror editor in a cell. Each call returns JS promise object, which makes the whole process fully asynchronious.

In general, one has to write a JS representation of any symbol, which appears inside the `FrontEndExecutable["uid"]`, otherwise frontened causes an exception. 

One can force Wolfram to threat an expression as frontend object by calling inside the cell

```mathematica
CreateFrontEndObject[
	Graphics3D[...],
	"uid"
]
```

The result will be the same.

## As a pointer
It acts as a pointer to the data on frontend, which is mutable by the server. There a some key features

- syncs `WL/server` $\rightarrow$ `frontend/browser`  automatically, when called for the first time
- mutable by the server on every cell evaluation (slow)
- mutable by the server directly (the fastest)
> use frontened function `SetFrontEndObject` 
- mutable by the frontend
> this one is still questinable, but can be implemented later

To check the available method of transfering the data between JS frontend and WL see [[Advanced data transfering and visualisation]]

An object can be created manually by calling inside cell as it was done in [[#As a decoration]]

```mathematica
CreateFrontEndObject[
	Table[i^2, {i,1,10}],
	"uid"
]
```

You can check the data inside by just calling

```mathematica
> FrontEndExecutable["uid"]
> {1,4,9,...}
```

Then, you can use it as a reference in some other frontened object like

```mathematica
CreateFrontEndObject[FrontEndOnly[
	ListLinePlotly@FrontEndExecutable["uid"]
]]
```

or

```mathematica
CreateFrontEndObject[
	ListLinePlotly@FrontEndRef["uid"]
]
```

or even like this

```mathematica
CreateFrontEndObject[
	ListLinePlotly@FrontEndRef[FrontEndExecutable["uid"]]
]
```

and since `ListLinePlotly` is a registered object

```mathematica
ListLinePlotly@FrontEndRef[FrontEndExecutable["uid"]]
```

Here we wrapped the given data into `FrontEndOnly`, that holds the expressions for WL and prevents evaluation of server, leaving the code to be executed on frontend. The latest example instead of `FrontEndOnly` we used `FrontEndRef`, that basically holds `FrontEndExecutable` and prevents it from the evaluation.

If you do not want CodeMirror to replace it with a decorations use non-executable synonym 
```mathematica
FrontEndExecutable["uid"] -> FrontEndRef["uid"]
```

More about computations like this - see [[Heterogenesis computation]]
Also check out the tutorial [[Working with frontend objects]]

### Mutabillity
Each time you reevaluate the cell content, where the object was created - an Evaluator (`Kernel/Evaluator.wl`) fires `ExtendDefinitions` on a master kernel. It compares the new objects to the old data in the Notebook object property and shares the changed objects across all connected clients (associated with the given notebook).

>See `NotebookExtendDefinitions` function in `Kernel/Notebook.wl`.

#### Direct update (the fastest)
Sends the data directly to the frontened leaving out the master kernel (see [[Evaluation]])

```mathematica
SetFrontEndObject["uid",
	Table[i^3, {i,1,10}]
]//SendToFrontEnd;
```

or in the same fashion, but prettier 

```mathematica
SetFrontEndObject[FrontEndExecutable["uid"],
	Table[i^3, {i,1,10}]
]//SendToFrontEnd;
```

or even better (WOW)

```mathematica
FrontEndExecutable["uid"] = Table[i^3, {i,1,10}]
```

or if you do not want CM6 to draw it

```mathematica
FrontEndRef["uid"] = Table[i^3, {i,1,10}]
```

In principle one can send any command and call any function of the frontened by using `SendToFrontEnd`. More info - see [[Advanced data transfering and visualisation]]

### Nesting
One can create a frontend object, that has a reference to another one and etc. The benifits of this approach you will see in [Dynamic binding](#Dynamic%20binding) section

![](../imgs/manipulate-frontend-example.excalidraw.svg)

in the example above it shows how typical `Manipulate` function can be imlemented. In the simples case it has three parts
- a slider to control the variables
- a graphical object (Plot) that shows the results
- the data, that is provided to the plotting function

and actaully there is a forth one - `Panel`, which holds the first two. All of them are frontend objects. Of course this contruction can be generated automatically

```mathematica
slider = Slider[];
...
With[{plot = CreateFrontEndObject[ListLinePlotly[FrontEndRef["data"]], "plot"]},
	With[{slider = CreateFrontEndObject[slider, "slider"]},
		CreateFrontEndObject[FrontEndOnly@Panel[{slider, plot}], "panel"]
	]
]
```

or it can be rewritten in a more compact way (if you want to use IDs)

```mathematica
slider = Slider[];
...
CreateFrontEndObject[slider, "slider"];
CreateFrontEndObject[ListLinePlotly[FrontEndRef["data"]], "plot"];

CreateFrontEndObject[Panel[{FrontEndRef["slider"], FrontEndRef["plot"]}]]
```

the last one goes to the output cell. But sure, you will also need to define a handler for a slider on Wolfram Kernel's side to update `data` object.

### Dynamic binding
The ideas for WLJS Frontened were inspired by an amazing project [Observable](https://observablehq.com/@jerryi) - JS notebook interface working in the browser, where the dynamics was polished perfectly.

In Observable all expressions are `Dynamic` in terms of Mathematica by the default. Me, as a maintener (@JerryI) tried to bring it as close as possible to such behaviour, leaving out laggs as possible of Mathematica's frontened.

Therefore, ==all frontened objects aka `FrontEndExecutable` are dynamic by the default==. The change in one will cause the updates to ones, which depends on it. This behaviuor is achived by collecting all calls of frontened functions and storing them to special handlers assigned to each frontend object. In principle we do not even need WL Kernel to update the content.

Let us try to explain it in following example

*create such an object*
```mathematica
CreateFrontEndObject[ Table[Sin[i]//N, {i,0,2Pi,0.1}] , "myObject"]
```

*create a visualiser for it*
```mathematica
CreateFrontEndObject[FrontEndOnly[
  ListLinePlotly[FrontEndExecutable["myObject"]]
], "visualiser"]
```

The last cell creates another frontend object `"visualiser"`, which depends on the `"myObject"`. [WLJS Interpreter](https://github.com/JerryI/wljs-interpreter) creates a straightforward "link" between them
$$myObject \rightarrow visualiser$$
where any changes to `"myObject"` will lead to internal reavaluation (on frontend's side!) of `FrontEndOnly` function and its content, i.e. call somewhere the following

*make changes directly*
```mathematica
Do[SetFrontEndObject[FrontEndExecutable["myObject"],

  Table[Sin[i*j]//N, {i,0, 2Pi, 0.1}]
  
] // SendToFrontEnd; Pause[0.3];, {j, 1,10}];
```

or with a bit of a syntax sugar available

```mathematica
Do[
	FrontEndExecutable["myObject"] = Table[Sin[i*j]//N, {i,0, 2Pi, 0.1}];
	Pause[0.3];
, {j, 10}];
```

After than you will see a nice animation of the output of second cell without actual reevaluation

![[../imgs/plotly-dynamic.gif]]

One could argue that this is an actual reevaluation, which might be quite slow. However, during this process ==an additional information to the whole stack of called functions is provided regaring of a type of an update, i.e. restyling, data update, data append and etc==. Therefore, each WLJS function can optimise its behaviour to gain perfomance - see section `Methods` in [WLJS Interpreter](https://github.com/JerryI/wljs-interpreter) and [Frontend functions](Frontend%20functions.md)

This is a just a top of the surface, the things you can do with it are quite bigger...

### Instancing
Each call of `FrontEndExecutable["uid"]` creates an instance of the corresponding object with its local memory (see more [Frontend functions](Frontend%20functions.md)). So copying and pasting

```mathematica
FrontEndExecutable["myId"] FrontEndExecutable["myId"] FrontEndExecutable["myId"]
```

you will create separate objects connected to the same storage item with `uid` as an identifier.

![](../imgs/intancing.excalidraw.svg)

### 🚧 Applying | Injection arguments
*This feature is still in development*, however the idea is that sometimes we do not need to create separate `FrontEndExecutable` s to modify one slightly. Therefore one could pass an extra information for the instance

```mathematica
FrontEndExecutable["uid", extra arguments...]
```

If it would be possible, one could also add support `Function` symbol to the frontend. And then, we can for sure perform recalculations directly on the frontend! See more in [Frontend functions](Frontend%20functions.md)


## Cheat-sheet
for the brief explanation

![](../imgs/working-with-frontend-object.excalidraw.svg)

## Summary | TLDR
For the best experience - check the tutorial [[How to work with ]], which is a real notebook exported from the frontend to a standalone `.html` file.

### How to create
For the registered types (see [Writting WebObject](Writting%20WebObject.md))

```mathematica
ListLinePlotly[{1,2,3,4,5}]
```

or explicitly assigning a custom id

```mathematica
CreateFrontEndObject[
	ListLinePlotly[{1,2,3,4,5}],
	"myId"
]
```

for you data

```mathematica
CreateFrontEndObject[
	{1,2,3,4,5},
	"myDataId"
]
```

In the all cases it returns

```mathematica
> FrontEndExecutable["myId"]
> FrontEndExecutable["myDataId"]
```

### How to get the data
On WL's side it works if there was no wrapper around

```mathematica
FrontEndExecutable["myDataId"][[1]]
> 1
```

### How to update
Explicitly it can be done by reevaluating the corresponding cell

```mathematica
CreateFrontEndObject[
	ListLinePlotly[{1,2,3,4,5}//Reverse],
	"myId"
]
```

after the evaluating, all instances of `FrontEndExecutable["myId"]` shown on the screen in any cell will be updated. Check the tutorial [W] to see it in a better way.

But this is slow, direct update is faster

```mathematica
SetFrontEndObject["myId", ListLinePlotly[{1,2,3,4,5}//Reverse]] // SendToFrontEnd;
```

this is also valid

```mathematica
SetFrontEndObject[FrontEndExecutable["myId"], ListLinePlotly[{1,2,3,4,5}//Reverse]] // SendToFrontEnd;
```

and this is too

```mathematica
FrontEndExecutable["myId"] = ListLinePlotly[{1,2,3,4,5}//Reverse];
```

and this is too

```mathematica
FrontEndRef["myId"] = ListLinePlotly[{1,2,3,4,5}//Reverse];
```

### Data and view separation | Nesting

To update the data separately from the plotting function

```mathematica
ListLinePlotly[FrontEndRef[FrontEndExecutable["myDataId"]]]
```

or

```mathematica
ListLinePlotly[FrontEndRef["myDataId"]]
```

Then you can update the data only

```mathematica
FrontEndExecutable["myDataId"] = RandomReal[{-1,1}, 4];
```

or attach a slider to it

```mathematica
slider = Slider[0,1,0.1];
Function[x, FrontEndExecutable["myDataId"] = x RandomReal[{-1,1}, 4]] // slider;

slider
```

## Inline frontend objects
One can compress small FE objects in way like

```mathematica
FrontEndExecutableInline["JSON expression"]
```