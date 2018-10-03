import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('localhost:5000');

socket.on('message', data => {
  console.log(data);
});

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
        <button onClick={() => this.emit('James', 'Hello there')}>Emit</button>
      </div>
    );
  }
}

export default App;
