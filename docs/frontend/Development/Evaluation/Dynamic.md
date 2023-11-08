---
sidebar_position: 2
---
To support dynamics and two-ways data binding it relies on the event-based evaluation. For each asynchronous evaluation on the secondary kernel via Kernel API

- an event has to be fired by the frontend (browser)
- a direct request must be send by the frontend

:::info
Consider to see also [event-generators](../../Advanced/Events%20system/event-generators.md), [EventObject](../../Reference/Events/EventObject.md), [EventHandler](../../Reference/Events/EventHandler.md) and [server](../../Reference/Javascript%20API/server.md) from the JS API section in reference.
:::
### Event system
It uses a very simplified event system, where an event object has an id and the data inside. Each event object can be assigned only to the one handler

```mermaid
flowchart LR

subgraph EventObject
	id
	data
end

subgraph EventHandler
	Function
end

EventObject --Call-->EventHandler
```

in the code anywhere one can use
```mathematica
event = EventObject[<|"id"->"uid"|>]
EventBind[event, Function[data,
	Print["Fired!"];
	Print[data]
]]
```
to fire an event one need to evaluate
```mathematica
EmittedEvent["uid", "Hello world"]
```

The trick is that one can substitute anything in-between 

```mermaid
flowchart LR

subgraph Frontend
subgraph Event1["Event"]
	id1["id"]
	data1["data"]
end
end


subgraph SecondaryKernel
subgraph EventHandler
	Function
end
end

Event1--Fire-->EventHandler

```

on JS side (frontend) it looks like
```js
server.emitt('uid', data)
```

A slider, a button, an animation on the frontend __are a just event-generators__ with a fancy view boxes (see [Boxes](../Customizing%20IO/Boxes.md)).

:::info
When an event is fired it bypasses the master kernel and goes directly to your evaluating (secondary) Kernel using a dedicated WebSockets channel for the sake of performance
:::
#### A direct request by the frontend to the secondary kernel
On JS side it is possible to evaluate any arbitrary function on the secondary kernel by calling
```js
server.talkKernel('Print["Hi!"]')
```

#### How to reply back?
To make fire the chain backwards we rely on the direct communication between frontend and the secondary kernel. Secondary kernel is always aware, to which notebook it is connected. Then to execute any frontend function (see [FrontSubmit](../../Reference/Dynamics/FrontSubmit.md)) one can call

```mathematica
FrontSubmit[ Alert["Hello World"] ];
```

ie.

```mermaid
flowchart RL

subgraph Frontend
WLJS --> Alert!
end



SecondaryKernel


SecondaryKernel--Alert-->WLJS

```

:::info
All events and etc bypasses master kernel and goes directly to your browser.
:::

One can transfer any arbitrary symbolic or non-symbolic data to it and even perform Heterogenesis computation there.

### Promises
The given examples above are focused on the async evaluation and etc. But what if we need get some data from the master or secondary kernel and then, perform some calculations using that?

it uses `NotebookPromise` api together with JS's `promise` in a way like
```js
server.ask('1+1').then((result)=>{
	alert(result)
})

//or for thesecondary kernel
server.askKernel('1+1').then((result)=>{
	alert(result)
})
```

it allows you to write efficient async code with synchronous communication.