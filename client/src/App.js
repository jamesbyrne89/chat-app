import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import InputBox from './components/InputBox/InputBox';
import styled from 'react-emotion';

const socket = io('localhost:5000');

socket.on('message', data => {
  console.log(data);
});

const SendButton = styled('button')`
  background: var(--red);
  color: #fff;
  line-height: 3;
  padding: 0 1em;
  border: solid 1px transparent;
  cursor: pointer;
`;

class App extends Component {
  emit = (username, message) => {
    socket.emit('message', {
      username,
      message
    });
  };

  render() {
    return (
      <div className="App">
        <InputBox />
        <SendButton onClick={() => this.emit('James', 'Hello there')}>
          Send
        </SendButton>
      </div>
    );
  }
}

export default App;
