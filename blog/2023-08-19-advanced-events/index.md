---
slug: event-advanced
title: Advanced guide on Events
authors: jerryi
tags: [frontend, events]
enableComments: true
---

As a short summary - where you can use event-handlers / listeners 

- on `Graphics2D` elements to listen users interactions 
	- drag, click, zoom, mousemove
- on `Graphics3D` elements
	- transform
- on any `EventObject` 
- on the output cell using `EvaluationCell[]` to attach to cell's events
	- evaluation, destroy

An event-driven approach was inspired by Javascript language, where one can subscribe to any changes of any objects. Here it is way more simplified compared to JS, but covers all practical cases.

<!--truncate-->

import Component from '@site/src/components/wljs-notebook-react/includes';
import Notebook from '@site/src/components/wljs-notebook-react';

<Component></Component>

## Thumb rule

One event-object - one handler function

```mathematica
ev = EventObject[<|"id"->"evid", ...|>]
EventHandler[ev, Print]
```

i.e.

```mermaid
flowchart LR

subgraph EventObject
	id=evid
	...
end

subgraph EventHandler
	Print
end

EventObject --"By id"-->EventHandler
```

to remove our handler
```mathematica
Delete[ev]
```
where it deletes a handler function, but not an `EventObject`.

:::tip
To assign more event handlers, you need to __clone an event object__ 
:::
### Cloning events
Considering the previous example we had

```mathematica
ev = EventObject[<|"id"->"evid", ...|>]
(* first handler *)
EventHandler[ev, Print]; 

(* second handler *)
clone = EventClone[ev];
EventHandler[clone, Print];
```

What it does, it converts a simple `EventObject` into something like an event router, which is populated by two new event-objects

```mermaid
flowchart LR

subgraph EventObject
	id=evid
	prop1["props"]
end

subgraph EventRouter
	subgraph List
		id=new1
		id=new2
	end
	prop2["props"]
end

subgraph EventHandler1[EventHandler]
	Print1[Print]
end

subgraph EventHandler2[EventHandler]
	Print2[Print]
end

EventObject --"By id"--> EventRouter

id=new1 --"By id"-->EventHandler1
id=new2 --"By id"-->EventHandler2
```

Anything you do with `clone` will not affect the `ev`

```mathematica
Delete[clone]
```

:::info
Cloned object inherits all properties (i.e. initial data), that the original object has.
:::

## Merging
For example you want to update the state of something based on two events, that may happen independently, then

```mathematica
ev1 = EventObject[<|"id"->"evid1"|>]
ev2 = EventObject[<|"id"->"evid2"|>]

joined = Join[ev1, ev2]
```

:::tip
You do not have to clone your events before joining them, since it does it automatically keeping all other connections intact
:::

```mermaid
flowchart LR

subgraph EventObject1[EventObject]
	id=evid1
	prop1["props1"]
end

subgraph EventObject2[EventObject]
	id=evid2
	prop2["props2"]
end

subgraph EventRouter
end

subgraph EventObject3[EventObject]
	id=new
	prop3["merged props"]
end

EventObject1 --> EventRouter
EventObject2 --> EventRouter

EventRouter --Fire--> EventObject3
```
## Properties
There is a simple association wrapped inside `EventObject`. By its nature this is not a classical object in the sense of OOP, since the handler function has no access to the their properties and only `id`  field is stored in global a memory. 
### Inheritable
There is a property `"initial"`, that specifies the initial value of the data shipped when the event is fired, when you apply `Join` or `EventClone` the final initial conditions will be merged from the different event objects or just copied

```mathematica
ev1 = EventObject[<|"id"->"ev1", "initial"-><|"x"->1|>|>]
ev2 = EventObject[<|"id"->"ev1", "initial"-><|"y"->2|>|>]

Join[ev1, ev2]
```

the result will be

```mathematica
EventObject[<|"id"->"random", "initial"-><|"x"->1, "y"->2|>|>]
```
### Non-inheritable
A very useful property, that comes handy when making GUI elements `"view"`

```mathematica
EventObject[<|"id"->"evid", "view"->Graphics3D[Sphere[]]|>]
```

it acts only when the object is printed to the output cell, then, we will see

<Notebook code="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" name="self-respect-214ad">self-respect-214ad</Notebook>

This is where the *body* of all input elements is located.
## Applications
The most interesting part is coming below
### Event listener for Graphics
An `EventHandler` expression always returns the original object, therefore it comes very handy to use it as a wrapper for buttons, sliders and most `Graphics` objects

```mathematica
p = {0,0};
Graphics[{
	White,
	EventHandler[
		Rectangle[{-2,2}, {2,-2}],
		{"mousemove"->Function[xy, p = xy]}
	],
	PointSize[0.05], Cyan,
	Point[p // Offload]
}]
```

Here we are listening for `mousemove` event attached to a wide white rectangle and translate the coordinates to a cyan point.

:::info
An event-handling functions must be in __a list of rules__ with corresponding names of the events for `EventHandler` being attached to a standard graphical object

```mathematica
EventHandler[GraphicsPrimitive_, {""->...}]
```
I.e. the following
```mathematica
EventHandler[GraphicsPrimitive_, Print]
```
__will not work__, because `Point` does produce only named events
:::

There are following event available for 2D primitives
- drag
- mousemove
- click
- zoom

and for 3D primitives
- transform - similar to drag, but with gizmos 

### Cells events
It comes handy, when you for instance clone events and need to purge the handlers before each reevaluation. There is an access to any output cell via

```mathematica
EvaluationCell[]
```

Then, one can assign any expression to it
```mathematica
EventHandler[EvaluationCell[], {"destroy"->Print, "evaluation"->Print}]
```

One should not that those event are assigned to __the output cell__ generated after the evaluation. Therefore mostly useful will be to use `"destroy"`, while `"evaluation"` is called only if one tries to evaluate the output cell as an input cell.

### GUI elements
The most common place to deal with `EventObject`s is

```mathematica
InputButton["Click me"]
```

that evaluates into 
```mathematica
EventObject[<|"id"->"generated...", "view"->ButtonView[...], "initial"->False|>]
```

but __you will never see it__, because on output it shows only `view` field, that contains actual representation of a button as an interactive object, that fires an event with `id`. 
### Javascript binding
Think about it as a superset of the previous one. Let us try with an example of a...

Button
```javascript
.js
const button = document.createElement('input');
button.type = "button";
button.value = "Click me";
button.addEventListener('click', ()=>{
  server.emitt('evid', '"Clicked!"');
});

return button;
```

```mathematica
EventHandler["evid", Print];
```

By clicking on the appeared button you will see the message from the Kernel. This is how all GUI elements are made, apart from wrapping them into a functions, that generate uid's by its own. 

#### Making things fancier | View & Generator
Taking the previous example, we can improve it a bit starting from the __view component__

```js
.js
core.CustomButtonView = async (args, env) => {
  const options = await core._getRules(args, env);
  const button = document.createElement('input');
  button.type = "button";
  button.value = options.Label;
  button.addEventListener('click', ()=>{
    server.emitt(options.Event, '"Clicked!"');
  });

  env.element.appendChild(button);
}

return null;
```

Now this is a proper frontend function. Now it comes to __event-generator__

```mathematica
CustomButton[label_] := With[{uid = CreateUUID[]},
  EventObject[<|"id"->uid, "initial"->False, "view"->CustomButtonView["Label"->label, "Event"->uid]|>]
]
```

Then we can use `CustomButton` as a real GUI component for user's input

```mathematica
EventHandler[CustomButton["Woo"], Print]
```

## Cutting corners
For lazy people there are many shortcuts implemented

___Aliases___
There are many ways to tell the same

```mathematica
EventBind[ev, Print]
EventHandlet[ev, Print]
Print // ev
```

```mathematica
Delete[ev]
DeleteObject[ev]
Remove[ev]
```

___Fast event binding___
There is an another, sorter way of writing `EventHandler`
```mathematica
Print // ev
```
which is basically 
```mathematica
EventHandler[ev, Print]
```

___Assignment handler function___ 
Sometimes it is too repetitive to write every-time `var = # &`, instead
```mathematica
ev // Assign[x]
```
is basically an equivalent of 
```mathematica
EventHandler[ev, (x = # &)]
```

___Fire an event manually___
sometimes comes handy, when you want to initialize the data
```mathematica
ev = EventObject[<|"id"->"evid", ...|>]
EventFire[ev, 1+1]
```
or with no-data provided
```mathematica
EventFire[ev]
```

___Reference by id___
if you know an `uid` of the event, but don't have a real `EventObject`
```mathematica
EventHandler["evid", Print]
EventRemove["evid"]
EventFire["evid"]
EventFire["evid", 1+1]
```

---

__[Download Notebook](Greyness.wln)__ 

As well as the most part of WLJS Frontend, an event system was not carefully designed in-advance, but rather it was shaped and expanded iteratively via solving hundreds of practical cases.