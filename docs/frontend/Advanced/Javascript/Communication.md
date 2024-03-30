---
draft: false
---
Here we will highlight a few methods for communication with Javascript

:::note
See also [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md)
:::

## Direct call
Let us define our dummy function

```js title="cell 1"
.js
core.MyFunction = async (args, env) => {
  const data = await interpretate(args[0], env);
  alert(data);
}
```

then the fastest and most direct way of calling it is using [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md)

```mathematica title="cell 2"
FrontSubmit[MyFunction["Hello World!"]]
```

or chaining it with some other WLJS function

```mathematica
FrontSubmit[MyFunction[ReadClipboard[]]]
```

## Execution in the container
So-called containers gives a DOM element, local memory for our function (see more [WLJS Functions](frontend/Advanced/Frontend%20interpretation/WLJS%20Functions.md))

```js title="cell 1"
.js

core.MyFunction2 = async (args, env) => {
  const data = await interpretate(args[0], env);
  env.element.innerHTML = `<span style="color:red">${data}</span>`;
}
```

Now we can call it from our cell

```mathematica title="cell 2"
CreateFrontEndObject[MyFunction2["Hello World!"]]
```

it behaves like a symbol.

:::tip
You don't have to always use [CreateFrontEndObject](frontend/Reference/Frontend%20Objects/CreateFrontEndObject.md). It is possible to force Wolfram Kernel to apply it automatically on output using [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) 
:::

__This is basically how [Graphics](frontend/Reference/Graphics/Graphics.md) and others are implemented.__

## Data fetching
A back communication is also possible

```js title="cell 1"
.js

core.MyFunction3 = async (args, env) => {
  return [1,2,3,4,5,6];
}
```

and to read it synchronously

```mathematica title="cell 2"
FrontFetch[MyFunction3[]]
```

or asynchronously

```mathematica title="cell 2"
Then[FrontFetchAsync[MyFunction3[]], Function[data, Print[data]]]
```

## Emitting events
We can call any WL function using [Events](frontend/Reference/Misc/Events.md) system

```js title="cell 1"
.js

const button = document.createElement('button');
button.innerText = "Press me";

button.addEventListener('click', () => {
  server.kernel.emitt('eventUid', 'True');
});

return button;
```

Now we can capture it using

```mathematica title="cell 2"
EventHandler["eventUid", Print]
```

### Custom UI component
Using JS one can craft its own UI components. For example

```js title="cell 1"
.js

core.MyCustomComponent = async (args, env) => {
  const label = await interpretate(args[0], env);
  const ev = await interpretate(args[1], env);
  
  const button = document.createElement('button');
  button.innerText = label;
  button.style.backgroundColor = "lightblue";

  button.addEventListener('click', () => {
    server.kernel.emitt(ev, 'True');
  });

  env.element.appendChild(button);
}
```

Now we can make boxes for it

```mathematica title="cell 2"
MyCustomComponent /: MakeBoxes[m_MyCustomComponent, StandardForm] := With[{
  o = CreateFrontEndObject[m]
},
  MakeBoxes[o, StandardForm]
]
```

In action

```mathematica title="cell 3"
MyCustomComponent["Click me pls", "event1"]
EventHandler["event1", Print];
```

### Integrating with standard inputs
It is much easier to work with [`EventObject`](frontend/Reference/Misc/Events.md#`EventObject`)

```mathematica title="cell 3"
ClearAll[MyCustomComponent]

MyCustomInput[label_String] := With[{uid = CreateUUID[]},
  EventObject[<|"Id"->uid, "View"->MyCustomComponent[label, uid]|>]
]
```

in action it behaves similar to [InputRange](frontend/Reference/GUI/InputRange.md) and etc

```mathematica title="cell 4"
EventHandler[MyCustomInput["Click me"], Print]
```

### Using WLX
It is much easier to write markup in [WLX](frontend/Cell%20types/WLX.md) compared to JS

```jsx title="cell 1"
.wlx

MyCustomComponent2[OptionsPattern[]] := With[{
  Event = OptionValue["Event"],
  Label = OptionValue["Label"],
  Uid = CreateUUID[]
},
  <div>
    <button id="{Uid}" style="background: lightblue" class="p-1">
      <Label/>
    </button>
    <script type="module">
      document.getElementById('<Uid/>').addEventListener('click', () => {

          server.kernel.emitt('<Event/>', 'True');
      })
    </script>
  </div>
]

Options[MyCustomComponent2] = {"Event" -> "", "Label" -> "Click me"};
```

In action

```mathematica title="cell 2"
MyCustomComponent2["Event"->"test", "Label"->"Hello World!"] // WLXEmbed
EventHandler["test", Print];
```

or combining with a previous technic 

```mathematica title="cell 2"
MyCustomInput2[label_String] := With[{uid = CreateUUID[]},
  EventObject[<|"Id"->uid, "View"-> WLXEmbed[MyCustomComponent2["Label"->label, "Event"->uid]]|>]
]
```

You can use it as a normal input element

```mathematica title="cell 3"
EventHandler[MyCustomInput2["Click me"], Print]
```

#### Side effects
To call another function __after an elements was drawn__, use an options of [WLXEmbed](frontend/Reference/GUI/WLXEmbed.md). This is used for dynamic updates in [TextView](frontend/Reference/GUI/TextView.md) and [HTMLView](frontend/Reference/GUI/HTMLView.md) implementations.

### Emit event from WLJS
One can fire an event also using frontend's function `EventFire`, which is effectively acts like `server.kernel.emitt` being called from the WLJS Interpreter (i.e. using [FrontSubmit](frontend/Reference/Frontend%20IO/FrontSubmit.md) or other and wrapped in [Offload](frontend/Reference/Interpreter/Offload.md))

:::danger
Not implemented!
:::

```mathematica
EventHandler["internalEvent", Print];
FrontSubmit[EventFire["internalEvent", ReadClipboard[]] // Offload]
```

It will send an expression to be executed on the frontend, that reads a clipboard and fires back an event with a fetched data.


## Request evaluation
It is also possible from Javascript to request an evaluation of any symbol using [`server`](https://jerryi.github.io/wlx-docs/docs/Reference/Misc/WLJSTransport#server) object

```js
.js

const doc = document.createElement('span');

const run = async () => {
  const data = await server.kernel.ask('RandomReal[{-1,1}, 3]');
  const result = await interpretate(data, {});
  doc.innerText = result.join(', ');
}

run();

return doc;
```

