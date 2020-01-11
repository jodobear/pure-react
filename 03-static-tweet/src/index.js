import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar() {
  return (
    <img src="https://img.icons8.com/doodle/96/000000/user-male--v1.png" className="avatar" alt="avatar" />
  )
}

const Message = () => {
  return (
    <div className="message">
      {'Messages go here. Implement how to make them less than 240 char.'}
    </div>
  )
}

const NameHandle = () => {
  return (
    <span className="name-handle">
      <span className="name">username</span>
      <span className="handle">@userHandle</span>
    </span>
  )
}
const Time = () => {
  return (
    <span className="time">1h ago</span>
  )
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
)
const RetweetButton = () => <i className="fa fa-retweet retweet-button"/>;
const LikeButton = () => <i className="fa fa-heart like-button"/>;
const OptionsButton = () => <i className="fa fa-ellipsis-h options-button"/>;

function Tweet() {
  return(
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameHandle/> <Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <OptionsButton/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Tweet/>,
  document.querySelector("#root")
);