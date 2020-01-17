import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// 1. error box
function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <i className="fa fa-exclamation-triangle"/>
      <h5 className="child-text">
        {children}
      </h5>
    </div>
  )
};

// 2. nav
function NavItem({ url, children }) {
  return (
    <a href={url}>{children}</a>
  )
}

function Nav({ children }) {
  let items = React.Children.toArray(children);
  items.forEach(item => {
    if (item.type.name !== NavItem.name) {
      throw "Only NavItem type child allowed.";
    };
  });
  // the following doesn't add the key!
  const keyedItems = items.map((item, i) =>
    <span key={i} className="key">{item}</span>
  );
  for(let i = keyedItems.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={i} className='separator'>|</span>
    );
  }
  try {
    return(
      <div>{keyedItems}</div>
    );
  } catch(e) {
    console.error(e);
  }
};

// How the fuck do you use this syntax for elementType and children??? Tried `arrayOf(NaveItem) and that doesn't do the check.
Nav.propTypes = {
  children: PropTypes.arrayOf(NavItem).isRequired
}

ReactDOM.render(
  [<ErrorBox>
    System reboot in process
  </ErrorBox>,
  <Nav>
    <NavItem url='/'>Home</NavItem>
    <NavItem url='/about'>About</NavItem>
    <NavItem url='/faq'>FAQ</NavItem>
    <NavItem url='/contact'>Contact</NavItem>
  </Nav>],
  document.querySelector('#root'));