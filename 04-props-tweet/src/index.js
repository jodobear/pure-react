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

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
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

function Time({ time }) {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
};

function ReplyButton () {
  return (
    <i className="fa fa-reply reply-button"/>
  );
  }

function getRetweetCount(count) {
  return (
    count > 0 ? <span className="retweet-count">{count}</span> : null
  );
  // Ternary operators are awesome!
  // if (count > 0) {
  //   return (
  //     <span className="retweet-count">{count}</span>
  //   );
  // } else {
  //   return null;
  // }
}

function Count({ count, object }) {
  return count > 0 ? <span className={`${object}-count`}>{count}</span> : null
}

function RetweetButton({ count }) {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      <Count count={count} object="retweet"/>
    </span>
  );
}

// function getLikeCount(count) {
//   if(count > 0) {
//     return (
//       <span className="like-count">{count}</span>
//     );
//   } else {
//     return null;
//   }
// }

function LikeButton({ count }) {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {/* this doesn't return the `span` with `like-count` when count === 0 */}
      {/* {count > 0 &&
        <span className="like-count">
          {count}
        </span>} */}
      {/* this will return `span` even if count === 0 */}
      <span className="like-count">
        {count > 0 ? count : null}
      </span>
    </span>
  );
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