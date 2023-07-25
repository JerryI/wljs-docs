---
sidebar_position: 1
title: 'Index'
---
<div style={{'text-align':'center'}}>

# XML Syntax Extension for Wolfram Language
<small style={{margin: 'auto', padding: 'none'}}>written with love to KirillBelovTest and HTML</small>

</div>

_WLX_ is a syntax extension for Wolfram Language that lets you write HTML-like markup inside a Wolfram Language Script. 

>The syntax and component based approach were inspired by [JSX](https://react.dev) - a well established and de facto standard Javascript extension for the modern web app development.

There is nothing better and more platform-agnostic was developed for designing  complex document structure than HTML & CSS. A tons of examples, well-polished templates are made using those two. Why should we invent anything new, but not just use it?

## Putting markup into Wolfram Language


## Simple rules is the key
### HTML Tag or WL Expression?
This is rather simple to guess

*html tag*
```jsx
<div></div>
```

*WL expression*
```jsx
<Div></Div>
```

There is no `html/xml` tag on Earth, that starts from the capital letter.

:::info
A tag name starting __from Capital letter__ refers to Wolfram Language expression
:::

### OwnValues and SubValues
Thankfully HTML/XML tag syntax allows to make it clear, where the own-values or sub-values of a given are called.

*from*
```mathematica
MySymbol[1]
```
*to*
```jsx
<MySymbol><1/></MySymbol>
```

:::info
First child element is the first argument of a given function
:::

*from*
```mathematica
MySymbol
```
*to*
```jsx
<MySymbol/>
```

## Thing to avoid

:::caution
Always close XML tags. I.e.
```jsx
<link rel="..."/>
<p></p>
```
:::

:::caution
Only a single top-level parent in a `.wlx` script is allowed
```jsx
(* Wolfram Language Code *)

<div>
	<!-- XML Code --->
</div>
```
:::

## Passing arguments

*from*
```mathematica
TextString[Now]
```
*to*
```jsx
<TextString><Now/></TextString>
```

Interconnection between components

*from*
```mathematica
Block[{value = data},
	MySymbol
]
```
*to*
```jsx
<MySymbol value={data} />
```

Attribute to the HTML element

*from*
```mathematica
StringTemplate["<div class=\"``\"></div>"][className]
```
*to*
```jsx
<div class="{className}"></div>
```


static properties are untouched. remains the same HTML unlike in JSX
```jsx
<div style="background-color: red"></div>
```


### Components

```jsx
Logo = Import["c.wsx"];
Header = Import["c.wsx"];

<Header>
	<Logo title={"WSX is awesome"}/>
</Header>
```


### Defining function
```jsx
TOC := Table[
	<li></li>
]

<ul>
	<TOC/>
</ul>
```

### Branching
HTML is a markcup language, therfore there is no way of doing branching in proper way.