---
env:
  - Wolfram Kernel
context: Notebook`Editor`Kernel`Slides`
source: https://github.com/JerryI/wljs-revealjs/blob/dev/src/Kernel.wl
package: wljs-revealjs
---
```mathematica
SlideEventListener[opts__]
```

attaches an event listener to a current slide

```md
.slide
# Slide 1

---

# Slide 2

Here is will fire

<SlideEventListener Id={"event"}/>
```

and then a handler on WL side

```mathematica
EventHandler["event", Echo]
```

## Options
### `"Id"`
a string representation of an event identifier, that will be used

## Event generation
It fires an event for a given slide (where it is placed) when it is revealed with a topic `"Slide"` and for each slide-fragment revealed `"fragment-x"` topic / pattern.

i.e.

### Patterns
#### `"Slide"`
fires when a slide was revealed (even the first one)
#### `"fragment-_"`
where `_` is a number of a fragment revealed on a slide
#### `"Mounted"`
fires, once an HTML content for a slide is ready


Try

```mathematica
EventHandler["myEvent", {any_String :> (Print[StringTemplate["::``:: ``"][any, #]]&)}];
```

```md
.slide

# 1st Slide
Nothing

---

# 2nd Slide
A message pops up

Another message <!-- .element: class="fragment" data-fragment-index="1" -->

<SlideEventListener Id={"myEvent"}/>
```


