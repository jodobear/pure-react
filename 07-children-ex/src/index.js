import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({ children }) {
  console.log(children);
  return (
    <div className="error-box">
      <i className="fa-exclamation-triangle"></i>
      <span className="error-msg">{children}</span>
    </div>
  )
}

const errorMsg = "This is the end of the world"
ReactDOM.render(
  <ErrorBox>
    {errorMsg}
  </ErrorBox>,
  document.querySelector('#root')
)
