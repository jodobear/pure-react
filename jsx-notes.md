# JSX <a name="jsx"></a>

- [JSX ](#jsx)
  - [What?](#what)
  - [Separation of Concerns](#separation-of-concerns)
  - [Working with JSX](#working-with-jsx)
    - [Capitalized Component Names ](#capitalized-component-names)
    - [Close Every Element ](#close-every-element)
    - [Multiple Components ](#multiple-components)
    - [Parenthesis ](#parenthesis)
    - [Returning Single Components ](#returning-single-components)
    - [Returning Array of Components ](#returning-array-of-components)
    - [JavaScript in JSX ](#javascript-in-jsx)
    - [Conditionals in JSX](#conditionals-in-jsx)
    - [Comments in JSX ](#comments-in-jsx)
  - [JSX Exercises](#jsx-exercises)
    - [ex05](#ex05)

Notes on JSX from Pure React book.

## What?

Syntax very similar to (X)HTML created for React to facilitate creating elements using familiar-looking syntax instead of writing function calls by hand.

There are no quotes around the “HTML” because, it’s not a string. React is not parsing that thing and converting it into HTML. JSX is just a nice syntactic sugar over function calls that create DOM elements.

JSX elements are actually compiled down to JavaScript by a tool called Babel, a “transpiler,” that transforms code into valid ES5 JS that all browsers can understand. Each JSX element becomes a function call, where its arguments are its attributes (“props”) and its contents (“children”).

JSX example: `return <span>Hello!</span>`
JS generated by compiler:
```js
return React.createElement(
  'span',
  {},
  'Hello');
```
The `React.createElement` function signature looks like this:
```js
React.createElement(
  string|element,
  [propsObject],
  [children...])
```
The `propsObject` and `children` are optional, and you can also supply more than one child by passing additional arguments:
```js
React.createElement(
  'div',
  {},
  'Hello',
  'World'
);
```
You can also nest the calls:
```js
React.createElement('div', {},
  React.createElement('div', {}, 'Child1'),
  React.createElement('div', {}, 'Child2',
    React.createElement('div', {}, 'Child2_child')
  )
);
```
## Separation of Concerns

The idea of separations of concerns the way it has been implemented till now, just by separating template & view logic into separate files is faux and does not automatically lead to separation of concerns.

Merging the logic and view makes your code easier to navigate, easier to write, and easier to debug. You’ll spend less time hopping between files when all the related functionality is in one place.

## Working with JSX

### Capitalized Component Names <a name="capitalized-component-names"></a>

In JSX, a component that starts with a lowercase letter is assumed to be a built-in HTML or SVG element (div, ul, rect, etc.). Hence, all component names must be capitalized, like so; `UserName` not `userName`.

### Close Every Element <a name="close-every-element"></a>

JSX requires that every element be closed, similar to XML or XHTML. This includes the ones you might be used to leaving open in HTML5, like `<br/>` not `<br>` or `<input/>` not `<input>` or maybe even `<li></li>` not just `<li>`.

### Multiple Components <a name="multiple-components"></a>

You can return multiple components within a component, like so;
```js
function HelloWorld() {
  return (
    <div>
      <Hello/> <World/>!
    </div>
  );
}
```
### Parenthesis <a name="parenthesis"></a>

If you don't wrap the return in parenthesis then the opening tag must be on the same line as return and it's not very readable, like so;
```js
function HelloWorldDouble() {
  return <div>
    <Hello/> <World/>!
  </div>;
}
```
### Returning Single Components <a name="returning-single-components"></a>

If you take out the wrapping `<div></div>` from `HelloWorldDouble` above, then:
```js
// This JSX:
  return (<Hello/> <World/>);

// Becomes this JS:
  return (
    React.createElement(Hello, null) React.createElement(World, null)
  );
```
Returning two things at once makes no sense. So that leads to this very important rule:
**A component function must return a single element.**

### Returning Array of Components <a name="returning-array-of-components"></a>

**BUT** you can return an array of components, like so;
```js
// This JSX;
function HelloWorldDouble() {
  return [<Hello/>, <World/>]
}
// Would turn into this JS
// (notice the brackets).
function HelloWorldDouble() {
  return [
    React.createElement(Hello, null),
    React.createElement(World, null)
  ];
}
```

### JavaScript in JSX <a name="javascript-in-jsx"></a>

Surround JS objects, expressions in *braces*,`{}` and you can insert real JS in JSX, like so;
```js
function SubmitButton() {
  let buttonLabel = 'Bet';
    return (
      <button>{buttonLabel}</button>
    );
}
```
An expression produces a value. These are expressions:
```js
1 + 2
buttonLabel
aFunctionCall()
aFunctionName
```
Each of these produces (aka `returns`) a single value. In contrast, statements do not produce values and can’t be used inside JSX. Here are some examples of statements:

```js
let a = 42;
if(true) { 42; }
while(i < 10) { i++; }
```
None of these things produces, `returns` a value.

### Conditionals in JSX

Since you can't use `if`, we an either use the ternary operator `?`, like so;
```js
function ValidIndicator() {
  let isValid = true;
  return (
    <span>{ isValid ? 'valid' : 'not valid' }</span>
  );
}
```
Or using boolean operators such as `&&`, like so;
```js
function ValidIndicator() {
  let isValid = true;
  return (
    <span>
      { isValid && 'valid' }
      { !isValid && 'not Valid' }
    </span>
  );
}
```
### Comments in JSX <a name="comments-in-jsx"></a>

Comments in JSX must go inside a JavaScript block, like so;
```js
function ValidIndicator() {
  let isValid = true;
  return (
    <span>
    { isValid ? 'valid' : 'not valid' }
    {
      // comments must go inside braces
      // as they are JS syntax
      // multiline comments like this are ok.
    }
    { /* and also single line comments, like so. */ }
    </span>
  );
}
```

## JSX Exercises

For 01 - 04 check tht code in jsx-exercises app.

### ex05

1. lowerCase naming of component:
    > Warning: `<lowerCase />` is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
    in lowerCase.
2. Returning 2 elements at once:
    > Only the second element is rendered.
3. Returning an array of components:
    > Both the components get rendered.
4. Put 2 expressions inside single braces, like {x && 5; x && 7}:
    > `SyntaxError`, can't even parse it, but 2 braces is fine, like so; `{ x && 5 }; { x && 7 }`
5. Use return inside a JS expression:
    > * `SyntaxError`, when using conditional.
    > * `'x' is not defined  no-undef` when returning in a function and calling it.
6. Return a function call like alert('hi')
    > It displays the alert and waits for the update signal (clicking OK)
7. Putting a quoted string inside JSX. Does it strip out the quotes?
    > No, it displays the quotes`""`.