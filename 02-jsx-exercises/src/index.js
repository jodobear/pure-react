import React from 'react';
import ReactDOM from 'react-dom';

// ex01
function MyThing() {
    return (
        <div className='book'>
            <div className='title'>
                The Title
            </div>
            <div className='author'>
                The Author
            </div>
            <ul className='stats'>
                <li className='rating'>
                    5 stars
                </li>
                <li className='isbn'>
                    12-345678-910
                </li>
            </ul>
        </div>
    );
};

const Ex02 = () => {
    return (
        <div>
            <div>
                NewLine
                Test
            </div>
            <div>
                Empty

                NewLines

                Test
            </div>
            <div>
                &nbsp;Non-breaking
                &nbsp;Spaces&nbsp;
            </div>
            <div>
                Line1 before space
                {' '}
                Line2
            </div>
        </div>
    )
}

// ex03 converting MyThing without JSX
const MyThingWoJSX = () => {
    return (
        React.createElement('div', {className: 'book'},
        React.createElement('div', {className: 'title'}, 'The Title',
        React.createElement('div', {className: 'author'}, 'The Author',
        React.createElement('ul', {className: 'stats'},
        React.createElement('li', {className: 'rating'}, '5 stars',
        React.createElement('li', {className: 'isbn'}, '12-345678-910',
        ))))))
    )
}

// ex04 conditional
const Greeting = () => {
    // try all of the variations
    var username = "root";
    // var username = undefined;
    // var username = null;
    // var username = false;

    return (
        <div>{ username ? `Hello ${username}` : 'Not logged in' }</div>
    )
}

// ex05 breaking JSX
// a: component starting with a lowercase letter
const lowerCase = () => {
    return (
        <div>Error</div>
    )
}
// b: returning 2 elements at once
const Returning2Com = () => {
    return (
    <MyThing/>, <Ex02/>
    )
}
// c: returning an array with 2 elements inside
const Ex0102 = () => {
    return [
        <MyThing/>, <Ex02/>
    ]
}
// d: try this: {x && 5; x && 7}
const TwoExpressions = () => {
    var x = 5;
    return (
        <div>
        { /* <div>{ x && 5; x && 7 }</div>  // can't do this*/ }
        { x && 5 }; { x && 7 } { /* this is possible */ }
        </div>
    )
}
// e: use return inside a JS expression
// const ReturnInJSExp = () => {
//     return (
//         <div> {function abc() {
//             return (1)}}; {abc()}</div>
//     )
// }

// f: return a function call like alert('hi')
const ReturnFuncCall = () => {
    return (
        <div>{ alert('Hi!') }</div>
    )
}
// g: putting a quoted string inside JSX. Does it strip out the quotes?
const QuotedString = () => {
    return (
        <div>"This is a quoted string"</div>
    )
}

ReactDOM.render(
    <QuotedString/>,
    document.querySelector('#root')
);