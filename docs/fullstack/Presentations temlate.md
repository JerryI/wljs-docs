```slides
## Heading

<Module/>

<FrontEndObject uid={"plot"}/>

<SlideEvent/>

```


In some other cells


```mathematica
CreateFrontEndObject[Plot[], "plot"]
```

here one can test them and etc...
Once created, RevealJS will load them at once all

Then the sections with events
```mathematica
EventHandler["plot-1",
	gFactor = 2;
	(* effetive reval of V shape splitting *)
]

EventHandler[
	Range[]
]

EventHandle[
	(* add new stuff on top *)
	FrontSubmit[, Meta]
]
```