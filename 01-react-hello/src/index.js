import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
    <div>Hello World!</div>
  );
}

function HelloSinJSX() {
  return (
    React.createElement('div', null, "Hello World! We don't use JSX")
  );
}

function HelloChildren() {
  return (
    React.createElement('div', {}, 'Hello', 'World!')
  ) // note the lack of space between Hello & World
}

function NestedChildren() {
  return (
    React.createElement('div', {},
    React.createElement('p', {}, 'This is a paragraph child of first div.'), // if i close the parenthesis for the first div, then the first paragraph disappears, because returning 2 things at once makes no sense so it only returns the second div.
    React.createElement('div', {}, 'This is the second div, also child of first div.',
    React.createElement('p', null, 'This paragraph is child of second div',
    React.createElement('span', {}, 'This span is child of the paragraph'))))
  );
}

ReactDOM.render(
  <NestedChildren/>,
  document.querySelector('#root'));

// Ch: Working with JSX

function Hello() {
  return (
    <span>Hello</span>
  );
}

function World() {
  return <span>World</span>;
}

function HelloWorldDouble() {
  return [<Hello/>, <World/>]
}

ReactDOM.render(
  <HelloWorldDouble/>,
  document.querySelector('#root')
);
// since there are two renders the second one will be the last to load and that's what you'll see.