---
draft: false
---
The most basics styling

## Global settings
One can set a global style applied for all slides in your notebook. You need to use [HTML](frontend/Cell%20types/HTML.md) or [WLX](frontend/Cell%20types/WLX.md) cels for it and redefine `.reveal` class

```html title="cell 1"
.wlx

<style>
  .reveal {
    font-family: Arial;
  }
</style>
```

now the default font will be `Arial`

```jsx title="cell 2"
.slide

# Hey, I am Arial!
```

## Local
One can do the same with an individual slide by wrapping the text into HTML or [WLX](frontend/Cell%20types/WLX.md) tags

```jsx
.slide

<div style="font-family: Arial">

# Title, I am Arial

</div>

I am not Arial
```

:::warning
In order to mix Markdown with HTML or [WLX](frontend/Cell%20types/WLX.md) correctly, remove white spaces from the beginning markdown, i.e.

```html
.slide

<div>
	# It wont work
</div>
```

but instead

```html
.slide

<div>

# It will work

</div>
```


:::

Or one can define a class for it early

```html title="cell 1"
.wlx

<style>
  .specialClass {
    font-family: Arial;
  }
</style>
```

```jsx title="cell 2"
.slide

<div class="specialClass">

# Title, I am Arial

</div>

I am not Arial
```

### Using data attributes
It might come handy to use RevealJS styling option for individual elements instead of writing plain XML

```jsx
.slide

<!-- .slide: data-background-color="black" -->


# Hey, I am white <!-- .element: style="color:white" -->

# Hey, I am red <!-- .element: style="color:red" -->
```

Here `slide` is applied to an entire slide, while `element` is localized to the last markdown element.

