import React, { Component } from 'react';
import io from 'socket.io-client';
import '../styles/App.css';
import ChatsList from './ChatsList/ChatsList';
import Output from './Output/Output';
import InputBox from './InputBox/InputBox';
import styled from 'react-emotion';

const socket = io('localhost:5000');

const AppContainer = styled('main')`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const ChatWindow = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversation_history: []
    };
  }

  componentDidMount() {
    const { conversation_history } = this.state;
    socket.on('message', data => {
      this.setState({
        conversation_history: [...this.state.conversation_history, data]
      });
    });
  }

  render() {
    return (
      <AppContainer>
        <ChatsList />
        <ChatWindow>
          <Output conversation={this.state.conversation_history} />
          <InputBox />
        </ChatWindow>
      </AppContainer>
    );
  }
}

export default App;
