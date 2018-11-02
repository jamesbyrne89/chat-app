import React, { Component } from 'react';
import io from 'socket.io-client';
import ChatsList from '../components/ChatsList/ChatsList';
import Output from '../components/Output/Output';
import InputBox from '../components/InputBox/InputBox';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import generateHash from 'random-hash';

injectGlobal`
:root {
  --red: #fe1515;
  --lightgrey: #f3f3f3;
  --redgradient: linear-gradient(to left, #ed2054 0%, #ff595f 100%);
  font-family: 'source sans pro', helvetica, arial, sans-serif;
  font-weight: 600;
}

.App {
  text-align: center;
  box-sizing: border-box;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  border: none;
  background: transparent;
}

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

const socket = io.connect('localhost:5000');

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
      conversation_history: [],
      allChats: []
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

  createNewChat = namespace => {
    this.setState({
      allChats: [...this.state.allChats, io.connect(namespace)]
    });
  };

  render() {
    return (
      <AppContainer>
        <ChatsList onClick={this.createNewChat} />
        <ChatWindow>
          <Output conversation={this.state.conversation_history} />
          <InputBox />
        </ChatWindow>
      </AppContainer>
    );
  }
}

export default App;
