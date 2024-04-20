This allows to reveal, remove or highlight some objects on a slide using built-in [animation framework of RevealJS](https://revealjs.com/fragments/).

For example

```md
.slide

# Fragments example

This will be here all the time

<span style="color:red">Appears later</span> <!-- .element: class="fragment" data-fragment-index="1" -->

And this one <!-- .element: class="fragment fade-up" data-fragment-index="2" -->
```

:::info
A selector `.element` is applied to a single Markdown line, or a single HTML or WLX tag
:::

## Animation types
Here is the list of available classes

|Name|Effect|
|---|---|
|fade-out|Start visible, fade out|
|fade-up|Slide up while fading in|
|fade-down|Slide down while fading in|
|fade-left|Slide left while fading in|
|fade-right|Slide right while fading in|
|fade-in-then-out|Fades in, then out on the next step|
|current-visible|Fades in, then out on the next step|
|fade-in-then-semi-out|Fades in, then to 50% on the next step|
|grow|Scale up|
|semi-fade-out|Fade out to 50%|
|shrink|Scale down|
|strike|Strike through|
|highlight-red|Turn text red|
|highlight-green|Turn text green|
|highlight-blue|Turn text blue|
|highlight-current-red|Turn text red, then back to original on next step|
|highlight-current-green|Turn text green, then back to original on next step|
|highlight-current-blue|Turn text blue, then back to original on next step|


## Custom Fragments
Following the [original guide](https://revealjs.com/fragments/) we can craft our own effects. For example for blur effect one can do it in two cells

```jsx title="cell 1"
.wlx

<style>
  .fragment.blur {
    filter: blur(5px);
  }
  .fragment.blur.visible {
    filter: none;
  }
</style>
```

```md title="cell 2"
.slide

# Example

A sample line <!-- .element: class="fragment blur" data-fragment-index="1" -->
```

