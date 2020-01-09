# Notes for Pure React by Dave Ceddia

<hr>

## Introduction <a name="introduction"></a>

### Method <a name="method"></a>

We will learn Pure React: The core concepts of React, in isolation, without Redux, Webpack, and the rest.

### What We’ll Cover <a name="what-we’ll-cover"></a>

1. Hello World.
2. How to compose static components and work with JSX.
3. “props” as a way to pass in the data they need, and “propTypes” for documenting and debugging the props that a component requires.
4. React’s special “children” prop, a powerful tool for building reusable, composable components.
5. Finally, “state,” how it differs from props, and how to organize it in an application. We’ll look at using form controls and the Component Lifecycle.

### Time Requirement <a name="time-requirement"></a>

The basic concepts of React can be learned in a matter of days. This book covers those basics and also contains exercises after each major concept to reinforce your understanding.

### How To Learn <a name="how-to-learn"></a>

#### Build A Lot Of Small Things <a name="build-a-lot-of-small-things"></a>

This is the awkward middle step that a lot of people skip. Moving on to Redux and other libraries without having a firm grasp of React’s concepts will lead straight back to overwhelmsville.

But this step isn’t very well-defined: what should you build? A prototype for work? Maybe a fancy Facebook clone, something substantial that uses the whole stack?

Well, no, not those things. They’re either loaded with baggage or too large for a learning project. You want to build small things.

#### Don’t Build a Prototype

“Prototypes” (for work) are usually terrible learning projects, because you know in your heart that a “prototype” will never die. It will live long beyond the prototype phase, morph into shipping software, and never be thrown away or rewritten. As soon as some manager sees that it works, features will be piled on. “We’ll refactor it some day” will turn out to be a lie. The code will grow bloated and disorganized.

When you know it won’t be throwaway code, the future looms large. You start to worry… Shouldn’t it have tests? I should make sure the architecture will scale… Am I going to have to refactor this mess later? And shouldn’t it have tests?

Worrying about architecture and scalability and “the future” is a bad strategy for learning the basics of a new technology.

On the flip side, if you build a prototype believing that it is throwaway code, it probably won’t be very good code. Then when your boss’ boss sees how awesome the prototype looks, he will absolutely not allow you to rewrite it with all the best practices you’ve learned. That’s a recipe for an unmaintainable code base.

#### What Should You Build

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

```js
ReactDOM.render([React Element], [DOM element]);
```

3. `HelloWorld` is a component. Primary way of writing components is as plain functions like this and called "stateless function components".
4. Two other ways of writing components: ES6 classes and the now-deprecated `React.createClass`.
5. HTML-like syntax inside render is JSX.

## Tweet Example

We create a tweet component as follows:

<img src="./tweet_component.jpg" alt="Tweet Component" width="720" height="320"/>

### Component Hierarchy

* Tweet
  * Avatar
  * NameAndHandle
  * TweetTime
  * Message
  * ReplyButton
  * RetweetButton
  * LikeButton
  * OptionsButton

### Approach

For a simple component like this, it doesn't matter if we build __Bottom Up__ or __Top Down__. Here we will build __Top Down__.

Usually you'll mix the approaches, for example, if we were building Twitter, we might build the Tweet component top-down, then incorporate it into a list of tweets, then embed that list in a page, then embed that page into the larger application. The Tweet could be built top-down while the larger application is build bottom-up.

### Learnings

* `prop`: We started with a `Tweet` component with `className` attribute. The `className` is the `prop`. Most of them are named identically to the HTML attributes, but `className` is special in that its value becomes the `class` attribute on the DOM node.
* `import './index.css'` imports CSS into JS. When Webpack builds the app, it sees this CSS import and learns that `index.js` depends on `index.css` so Webpack includes it in the bundled JavaScript (as a string) to be sent to the browser. We can see this in the browser – open dev console > Elements tab, and notice under `<head>` there’s a `<style>` tag that we didn’t put there. It contains the contents of `index.css`.
* When i  tried to load an icon from local dir `../public/jodobear.jpg` it didn't load the icon but, from a CDN it did. [Icons CDN](https://icons8.com/icon/pack/free-icons/)
* `<i className="fa fa-reply reply-button"/>` creates a button with reply icon.
* `<i className="fa fa-retweet retweet-button"/>` creates a button with retweet icon.
* `<i className="fa fa-heart like-button"/>` creates a button with heart(like) icon.
* `.time::before {..}` `::before`(`:*`) is _pseudo-element_.and _adds_ an element to the page. Old spec `:before` (`:*`) is _pseudo-selector_ just a selector that selects the appropriate element, e.g. `:nth-child(2)`.