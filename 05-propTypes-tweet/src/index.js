import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

import moment from 'moment';

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url} className="avatar" alt="avatar" />
  );
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
};

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired
};

function NameHandle({ author }) {
  // alt unpack author like so;
  // const { name, handle } = author;
  // then pass like so; { name }
  return (
    <span className="name-handle">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
};

NameHandle.propTypes = {
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

function Time({ time }) {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};

function ReplyButton () {
  return (
    <i className="fa fa-reply reply-button"/>
  );
  };

function Count({ count, object }) {
  return count > 0 ? <span className={`${object}-count`}>{count}</span> : null;
};

Count.propTypes = {
  count: PropTypes.number,
  object: PropTypes.string.isRequired
};

function RetweetButton({ count }) {
  const object = "retweet";
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      <Count count={count} object={object} />
    </span>
  );
};

RetweetButton.propTypes = {
  count: PropTypes.number
};

function LikeButton({ count }) {
  const object = "like";
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      <Count count={count} object={object} />
    </span>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number
}

function OptionsButton() {
  return (
    <i className="fa fa-ellipsis-h options-button"/>
  );
};

// passed a { tweet } prop.
function Tweet({ tweet }) {
  return(
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <OptionsButton/>
        </div>
      </div>
    </div>
  );
};

// This give invariant error that you can't call PropTypes directly.
Tweet.propTypes = {
  tweet: PropTypes.objectOf({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.exact({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired
    }).isRequired,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string
  })
}

// this works but is duplication! How to implement DRY(Don't Repeat Yourself) here.
// const tweetShape = {
//   message: PropTypes.string.isRequired,
//   gravatar: PropTypes.string.isRequired,
//   author: PropTypes.exact({
//     name: PropTypes.string.isRequired,
//     handle: PropTypes.string.isRequired
//   }).isRequired,
//   likes: PropTypes.number,
//   retweets: PropTypes.number,
//   timestamp: PropTypes.string.isRequired
// }

// Tweet.propTypes = {
//   tweet: PropTypes.exact(tweetShape)
// }

// creating a test tweet
var testTweet = {
  message: "Hello, Windowlickers!",
  gravatar: "xyz",
  author: {
    name: "Horn",
    handle: "justthetip"
  },
  likes: 420,
  retweets: 99,
  timestamp: "2020-01-11 03:44"
};

ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector("#root")
);