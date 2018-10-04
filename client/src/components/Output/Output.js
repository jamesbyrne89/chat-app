import React from 'react';
import styled from 'react-emotion';

const OutputWindow = styled('div')`
  width: 100%;
  background: var(--lightgrey);
  flex: 1;
`;

const MessageBubble = styled('div')`
  padding: 1.5em;
  background: var(--redgradient);
  color: #fff;
  width: 80%;
  margin: 1rem auto;
  border-radius: 0.5em;
`;

const Output = props => {
  return (
    <OutputWindow>
      {props.conversation.map((msg, i) => (
        <MessageBubble key={i}>
          <div className="message">{msg.username}:</div>
          <div className="message">{msg.message}</div>
        </MessageBubble>
      ))}
    </OutputWindow>
  );
};

export default Output;
