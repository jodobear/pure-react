# Notes for Pure React by Dave Ceddia

## Table of Contents

- [Method](#method)

<hr>

## Method <a name="method"></a>

We will learn Pure React: The core concepts of React, in isolation, without Redux, Webpack, and the rest.

## What We’ll Cover <a name="what-we’ll-cover"></a>

1. Hello World.
2. How to compose static components and work with JSX.
3. “props” as a way to pass in the data they need, and “propTypes” for documenting and debugging the props that a component requires.
4. React’s special “children” prop, a powerful tool for building reusable, composable components.
5. Finally, “state,” how it differs from props, and how to organize it in an application. We’ll look at using form controls and the Component Lifecycle.

## Time Requirement <a name="time-requirement"></a>

The basic concepts of React can be learned in a matter of days. This book covers those basics and also contains exercises after each major concept to reinforce your understanding.

## How To Learn <a name="how-to-learn"></a>

### Build A Lot Of Small Things <a name="build-a-lot-of-small-things"></a>

This is the awkward middle step that a lot of people skip. Moving on to Redux and other libraries without having a firm grasp of React’s concepts will lead straight back to overwhelmsville.

But this step isn’t very well-defined: what should you build? A prototype for work? Maybe a fancy Facebook clone, something substantial that uses the whole stack?

Well, no, not those things. They’re either loaded with baggage or too large for a learning project. You want to build small things.

### Don’t Build a Prototype

“Prototypes” (for work) are usually terrible learning projects, because you know in your heart that a “prototype” will never die. It will live long beyond the prototype phase, morph into shipping software, and never be thrown away or rewritten. As soon as some manager sees that it works, features will be piled on. “We’ll refactor it some day” will turn out to be a lie. The code will grow bloated and disorganized.

When you know it won’t be throwaway code, the future looms large. You start to worry… Shouldn’t it have tests? I should make sure the architecture will scale… Am I going to have to refactor this mess later? And shouldn’t it have tests?

Worrying about architecture and scalability and “the future” is a bad strategy for learning the basics of a new technology.

On the flip side, if you build a prototype believing that it is throwaway code, it probably won’t be very good code. Then when your boss’ boss sees how awesome the prototype looks, he will absolutely not allow you to rewrite it with all the best practices you’ve learned. That’s a recipe for an unmaintainable code base.

### What Should You Build

Build small, throwaway apps.

The sweet spot is somewhere between “Hello World” and “entire clone of Twitter.”

As your skill set grows, low-fidelity copies of simple apps and sites like Reddit, Hacker News, and Slack make good projects. Designers call this “copywork,”. They’ll come together quickly once you can clearly “think in components,” a skill you’ll develop as you progress through the book.

## P01: React Hello <a name="p01:-react-hello"></a>

### Step 1:
```bash
create-react-app react-hello
cd react-hello
rm src/App.* src/index.css src/logo.svg
```
### Step 2:
```js
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
    <div>Hello World!</div>
  );
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root'));
```
* `import` is ES6 and always at the top of `*.js` files.
* Unlike with ES5, we can’t include a `<script>` tag and get React as a global object. `import React from 'react'` creates a new variable called React with the contents of the react module.
* `‘react’` and `‘react-dom’` correspond to the names of modules installed by npm.
* `import React from 'react'` is equivalent to `var React = require('react')` in Node.js.

### Step 3

From inside the react-hello directory, start the app by running: `npm start`
A browser will open up automatically and display “Hello World!”

* **NOTE:** Got `error: ENOTFOUND x86_64-conda...` solved it by adding `HOST="localhost"` to `.bash_profile` and reloading environment variables by sourcing it; like so: `source ~/.bash_profile` following [this](https://medium.com/@choy/fixing-create-react-app-when-npm-fails-to-start-because-your-host-environment-variable-is-being-4c8a9fa0b461) link.

### How this code works?

Starting from bottom:

1. `ReactDOM.render` regular JS despite HTML looking `<HelloWorld/>` thing. React uses the concept of *virtual DOM*. It creates a representation of your component hierarchy and then renders those components by creating real DOM elements and inserting them where you tell it. In this case, that’s inside the element with an id of `root`.

2. `ReactDOM.render` takes 2 arguments, what to render (your component, or any other React Element) and where to render (a real DOM element), like so;

`ReactDOM.render([React Element], [DOM element]);

3. `HelloWorld` is a component. Primary way of writing components is as plain functions like this and called "stateless function components".
4. Two other ways of writing components: ES6 classes and the now-deprecated `React.createClass`.
5. HTML-like syntax inside render is JSX.

## JSX <a name="jsx"></a>

### What?

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
### Separation of Concerns

The idea of separations of concerns the way it has been implemented till now, just by separating template & view logic into separate files is faux and does not automatically lead to separation of concerns.

Merging the logic and view makes your code easier to navigate, easier to write, and easier to debug. You’ll spend less time hopping between files when all the related functionality is in one place.

