import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// address label
function AddressLabel({ person }) {
  return (
    <div>
      <div className="fullName">
        {person.fullName}
      </div>
      <div className="address-line01">
        {person.address.line01}
      </div>
      <div className="address-line02">
        {person.address.line02}
      </div>
    </div>
  )
}

// envelope
function Stamp({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <span className="stamp">
      <img src={url} alt={hash} />
    </span>
  )
}

function Envelope({ fromPerson, toPerson, stamp }) {
  return (
    <div className="envelope">
      <div className="from-person">
        FROM:<AddressLabel person={fromPerson} />
      </div>
      <div className="to-person">
        TO:<AddressLabel person={toPerson} />
      </div>
      <div className="stamp">
        <Stamp hash={stamp} />
      </div>
    </div>
  )
}

const testPerson01 = {
  fullName: "Alice Boom",
  address: {
    line01: "123 Fake St.",
    line02: "HEAVEN, XO 666"
  }
}

const testPerson02 = {
  fullName: "Bob Chown",
  address: {
    line01: "789 Real St.",
    line02: "HELL, XO 000"
  }
}

// credit card
function Card({ cardInfo }) {
  return (
    <div className="card">
      <div className="card-bank">
        {cardInfo.bank}
      </div>
      <div className="card-number">
        {cardInfo.number}
      </div>
      <div className="card-number-initials">
        1234
      </div>
      <div className="valid-thru">
        VALID <br/> THRU
      </div>
      <div className="card-expiration">
        {cardInfo.expiration}
      </div>
      <div className="card-holder">
        {cardInfo.holder}
      </div>
    </div>
  )
}

const testCard = {
  bank: "Big Bank, Inc.",
  number: "1234 5678 9000 6666",
  expiration: "01/21",
  holder: "Rocking Windowlicker"
}

// poster

function Poster({ image, title, text }) {
  return (
    <div className="poster">
      <img className="poster-image" src={image} />
      <h2 className="poster-title text">
        {title}
      </h2>
      <p className="poster-text text">
        {text}
      </p>
    </div>
  )
}
const url = "https://miro.medium.com/max/360/1*jTT8EHj84BWnILq1A3MRqg.jpeg";
const testPoster = {
  image: url,
  title: "Bitcoin",
  text: "Magic Internet Money, come Join Us!"
};

// email
function Email({ email }) {
  return (
    <div className="email">
        <span className="email-select">
          <i className="checkbox-light" />
        </span>
        <span className="email-pin">
          <i className="fa fa-pinterest-p" />
        </span>
      <div className="email-info">
        <h5 className="email-sender">
          {email.sender.split(', ')[0]}
        </h5>
        <h5 className="email-subject">
          {email.subject}
        </h5>
        <h6 className="email-date">
          {email.date}
        </h6>
      </div>
      <p className="email-message">
        {email.message}
      </p>
    </div>
  )
}
const msg = "Hello young Padawan! We have claimed self sovereignty of our money, ping us and we can show you the way out of this matrix."
const testEmail = {
  sender: "ABC, abc@mail.com",
  subject: "The Pill",
  date: "Jan 15",
  message: msg
}

ReactDOM.render(
  [<Envelope fromPerson={testPerson01} toPerson={testPerson02} stamp={"abc"} />,
    <Card cardInfo={testCard} />,
    <Poster image={testPoster.image} title={testPoster.title} text={testPoster.text} />,
    <Email email={testEmail} />],
  document.querySelector('#root')
)
