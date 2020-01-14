import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

function Card({ cardInfo }) {
  return (
    <div className="card">
      <div className="card-bank">
        {cardInfo.bank}
      </div>
      <div className="card-number">
        {cardInfo.number}
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

ReactDOM.render(
[<Envelope fromPerson={testPerson01} toPerson={testPerson02} stamp={"abc"} />, <Card cardInfo={testCard} />],
  document.querySelector('#root')
)