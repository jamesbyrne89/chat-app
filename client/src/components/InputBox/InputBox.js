import React, { Component } from 'react';
import styled from 'react-emotion';
import '../../App.css';

const MessageInputBox = styled('input')`
  line-height: 3;
  padding: 0 0.75em;
`;

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleInput = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <MessageInputBox value={this.state.message} onChange={this.handleInput} />
    );
  }
}

export default InputBox;
