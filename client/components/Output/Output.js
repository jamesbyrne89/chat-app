import React from 'react';
import styled from 'react-emotion';

const OutputWindow = styled('div')`
  width: 100%;
  background: var(--lightgrey);
  flex: 1;
`;

const MessageBubble = styled('div')`
  padding: 1em 1.5em;
  background: var(--redgradient);
  color: #fff;
  width: 80%;
  margin: 1rem auto;
  border-radius: 0.5em;
  line-height: 1;
  .time {
    margin-bottom: 1em;
  }
  .message {
    margin-left: 1em;
  }
`;

const Output = props => {
  return (
    <OutputWindow>
      {props.conversation.map(({ username, message, time }, i) => (
        <MessageBubble key={i}>
          <div className="time">{time}</div>
          <span className="username">{username}:</span>
          <span className="message">{message}</span>
        </MessageBubble>
      ))}
    </OutputWindow>
  );
};

export default Output;
