---
sidebar_position: 2
---
# Basics of syntax

import Theme from "./theme.js";
<Theme></Theme>

One can think about WLX as a WL and plain HTML got extended to each other. It allows you to write Wolfram Language using XML tags, and building HTML template using Wolfram Expressions.

:::tip
Unlike JSX, you can write a plain HTML inside WLX scripts with no restrictions.
:::

## Tags

It is easy to guess who is who

<div style={{ display: "block", clear: 'left'}}>
<div style={{ width: '48%', float: 'left', clear: 'left' }}>

HTML tag

```jsx
<div></div>
```

</div>

<div style={{ width: '48%', float: 'right', clear: 'right' }}>

Wolfram Expression

```jsx
<Div></Div>
```

</div>

</div>


There is no `html` tags on Earth, that starts from the capital letter.

## Ownvalues and Downvalues
Those types of assignments are most commonly used in Wolfram Language. Thankfully HTML/XML tag syntax allows to make it clear, which one is called

```mathematica
TextString[Now]
```

```jsx
<TextString> <Now/> </TextString>
```
**First child element is the first argument of a given function and etc.** Any self-closing tags represent an own-value of a symbol.

Any Number or String can be embedded as tag as well 

```mathematica
<Plus/><1.0/><1.0/></Plus>
```

## Simple rules is the key
There are certain rules you should sticked to in order to write a valid WLX
### Keep only one or zero root XML element
This implies that this one will be exported to the output, like in `CompoundExpression`

```mathematica
(* whatever WL code *)
Var = "Hello World!";

<body>
	<Var/>
</body>
```
This is good 👍🏼

However it does not mean, you cannot have nested expressions

```jsx
(* whatever WL code *)
Var = <h1>Hello World!</h1>;

<body>
	<Var/>
</body>
```
This is also good 👍🏼

### Always close any XML tags
Modern web-browsers are quite forgiving, when it comes to the syntax mistakes. All over the internet there is code like this

```html
<img src="http://...">
```
This is wrong 👎🏼  according to the convention of XML. 

WLX parser decodes the whole tree of XML and WL and, then, reconstructs it from AST. Therefore, always close tags explicitly

```html
<img src="http://..."/>
```
Much better 👍🏼

:::tip
Since WLX syntax is quite close to JSX, modern linters and syntax highlighting libraries can verify tags in WLX as well using JSX preset. Wolfram Expressions are quite hard to check, but in general, this comes very handy when you write a large script.

Avoid using `@`, `//` and wrap comments like in C `(* /* */ *)` to reduce the number of warning from the JSX linter.
:::

## Passing HTML attributes
This is a crucial thing, when it comes to markup. To maintain sort of compatibility with a well-established  __curly braces with double quotes__ are used

```jsx
URL = "https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg"
<img width="300" src="{URL}"/>
```

Since this is anyway a string, you can use it as a template

```jsx
URL = "upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg"
<img width="300" src="https://{URL}"/>
```

Any Wolfram expressions are allowed inside the braces

```jsx
URL = {"upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg"}
<img width="300" src="https://{URL[[1]]}"/>
```

## Iterators, branching?
`HTML/XML` is a markup language by its nature. Therefore it is recommended not to use explicitly `Table` or `If` expressions inside XML tags, but rather utilize Wolfram Language for that

```jsx
Columns[YourList__] := Table[
	<div class="lg:pr-4">   
		<div class="text-base leading-7 text-gray-700 ">
			<Child/>
		</div>
	</div>
, {Child, List[YourList]}];

<div class="col">
	<Columns>
		<p>This is column 1</p>
		<p>This is column 2</p>
		<p>This is column 3</p>
	</Columns>
</div>
```

Here a multiple `<p>` tags are substituted as a list of arguments to `Columns` function, that iterates over them and forms a wrapper HTML structure. Then the result is substituted into the bottom `div col` structure.

:::caution
Putting a plain text separated by multiple line breaks

```jsx
<Element>
	Line 1
	Line 2
</Element>
```

counts __as a single argument__ to the expression `Element`. However

```jsx
<Element>
	Line 1
	<p>Line 2</p>
</Element>
```

is already __two arguments__ passed with a string type (atom).
:::

## Options
Traditional Wolfram Language `Options` can be passed as if it was an HTML parameter

```jsx
<Heading title={"Some title"}/>
```

where
```mathematica
Heading[OptionsPattern[]] := With[{Title = OptionValue["title"]},
	<h1>This is some <Title/></h1>
]

Options[Heading] = {"title" -> "empty title"}
```

This can be done for the [downvalues](#Ownvalues%20and%20Downvalues) as well. The pattern is

```jsx
<TagName option1={Wolfram Expression} option2={...}/>
```

or

```jsx
<TagName option1={Wolfram Expression} option2={...}>
	whatever
</TagName>
```

where all passed arguments go before the `OptionsPattern`, i.e.

```mathematica
TagName[args__, OptionsPattern[]] := ...
```