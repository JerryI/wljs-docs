---
sidebar_position: 4
---
# Components

import Theme from './theme.js';
<Theme></Theme>

One of the key features is idea of reusable components borrowed from React. There is an in-build structure to embed other WLX scripts into the each other as sort of Wolfram Language expressions

```mathematica
<<JerryI`WLX`Importer
```

Then you can import other `wlx` scripts as so-called components into your other scripts, which is basically is crafted WL function in the end.

## Passing named arguments
Let us start from the example. We have a component, that makes italic labels

```jsx title="label.wlx"
<i>
	<TextString>
		<Text/>
	</TextString>
</i>
```

Then, one can import it in some other `.wlx` file
```jsx
Label = ImportComponent["label.wlx"]

<body>
	<Label Text={"Hello World"}/>
</body>
```

:::info
Use curly braces without double quotes to pass any WL expression to the imported component as __a named argument__.
:::

This is done in a way, that feels like a regular XML attribute. Or one can pass any Wolfram Expression as well

```jsx
Label = ImportComponent["label.wlx"]

<body>
	<Label Text={Now}/>
</body>
```

:::tip
Do not be afraid to import many nested components, since the result of `ImportComponent` is parsed once into a regular Wolfram Expression and stored in cache. See [Caching](#Caching)
:::

## Passing down-values as children
To construct a component that uses a normal tags with possibly nested structure - use `SetDelayed` on `ImportComponent`. See an example

```jsx title="label.wlx"
<i>
	<TextString>
		<$Children/>
	</TextString>
</i>
```

Then modify the main script as

```jsx
Label := ImportComponent["label.wlx"]

<body>
	<Label>
		<Now/>
	</Label>
</body>
```

Now `Label` works like a regular symbol with down-values, i.e. one can also do that

```mathematica
Label[Now]
```

There are a few predefined keywords to have an access to the child elements
### $FirstChild
Gets __the first__ passed argument

### $Children
Gets __all passed arguments as a list__

## Scoping
By the default it parses a script with `Localize` option (see [scoping](scoping.md)), but one the importing function accepts this option pattern as well, so you can override it.
## Caching
For the development / prototyping the caching is disabled. To improve the performance and lower the load for IO operations on a disk for many nested component - use global settings

```mathematica
JerryI`WLX`Importer`CacheControl[True]
```

or specify the time-interval

```mathematica
JerryI`WLX`Importer`Private`CacheControl["Minute"]
JerryI`WLX`Importer`Private`CacheControl["Hour"]
```

## UNIX / Windows paths
To overcome an issue with different path representation implementations, a universal platform-dependent converter is used. Therefore `ImportComponent` __is indifferent for the way how you write the path to a file__.
## Pitfalls
:::caution
`ImportComponent` requires a symbol to be assigned, since it uses a special up-values pattern

```mathematica
A  = ImportComponent["...1"]
B := ImportComponent["...2"]
```

always do it like that
:::