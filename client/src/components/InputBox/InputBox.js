import React, { Component } from 'react';
import styled from 'react-emotion';
import io from 'socket.io-client';
import '../../App.css';

const socket = io('localhost:5000');

const MessageInputBox = styled('input')`
  line-height: 3;
  padding: 0 0.75em;
  width: 100%;
`;

const SendButton = styled('button')`
  background: var(--redgradient);
  color: #fff;
  line-height: 3;
  padding: 0 1em;
  border: solid 1px transparent;
  cursor: pointer;
`;

const InputContainer = styled('form')`
  display: flex;
`;
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'James',
      message: ''
    };
  }

  handleInput = e => {
    const { username } = this.state;
    socket.emit('typing', {
      username
    });
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, message } = this.state;
    socket.emit('message', {
      username,
      message
    });
    this.setState({ message: '' });
  };

  render() {
    return (
      <InputContainer onSubmit={this.handleSubmit}>
        <MessageInputBox
          placeholder="Type your message..."
          value={this.state.message}
          onChange={this.handleInput}
        />
        <SendButton onClick={this.handleSubmit}>Send</SendButton>
      </InputContainer>
    );
  }
}

export default InputBox;
