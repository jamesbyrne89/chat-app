import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import ChatsList from './components/ChatsList/ChatsList';
import Output from './components/Output/Output';
import InputBox from './components/InputBox/InputBox';
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
      console.log(data);
      console.log([...this.state.conversation_history, data]);
      this.setState({
        conversation_history: [...conversation_history, data]
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
