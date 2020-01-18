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
  // items.forEach(item => {
  //   if (item.type.name !== NavItem.name) {
  //     throw "Only NavItem type child allowed.";
  //   };
  // });
  // the following doesn't add the key!
  // And is redundant, adds the same key twice, once here & then in separator.
  // Notice the key is set to some arithmetic key not just i, it was used simply to get around this point.
  /*
  const keyedItems = items.map((item, i) =>
    <span key={2 * i} >{item}</span>
  );
  */
  for(let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={2 * i + 1} className='separator'>|</span>
    );
  }
  try {
    return(
      <div>{items}</div>
    );
  } catch(e) {
    console.error(e);
  }
};

// How the fuck do you use this syntax for elementType and children??? Tried `arrayOf(NaveItem) and that doesn't do the check.
Nav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(NavItem))
}

// dialog box

function Dialog({ children }) {
  return (
    <dialog className="dialog" open>
      {children}
    </dialog>
  )
}

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Title),
    PropTypes.instanceOf(Body),
    PropTypes.instanceOf(Footer),
    PropTypes.instanceOf(<button></button>),
  ])
};

function Title({ text }) {
  return (
    <h2 className="title-text">{text}</h2>
  )
}

function Body({ content }) {
  return (
    <div>
      <p className="body">{content}</p>
      <hr/>
    </div>
  )
}

function Footer({ content }) {
  return (
    <p className="footer">{content}</p>
  )
}

const testDialog = {
  title: "Fire on the Mountain",
  body: "Get up! Get up! Get outta that door!",
  footer: "Take a whole pail of water"
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
  </Nav>,
  <Dialog>
    <Title text={testDialog.title}></Title>
    <Body content={testDialog.body}></Body>
    <Footer content={testDialog.footer}></Footer>
    <button className="fa fa-close" value="close" id="close">Close</button>
  </Dialog>],
  document.querySelector('#root'));