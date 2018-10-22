import React, { Component } from 'react';
import io from 'socket.io-client';
import ChatsList from '../components/ChatsList/ChatsList';
import Output from '../components/Output/Output';
import InputBox from '../components/InputBox/InputBox';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';

injectGlobal`
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

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
