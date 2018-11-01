import React from 'react';
import styled from 'react-emotion';

const ChatsContainer = styled('aside')`
  border: solid 1px #ccc;
`;

const ChatsList = props => {
  return (
    <ChatsContainer>
      List of chats
      <button onClick={() => props.onClick('/room2')}>New chat</button>
    </ChatsContainer>
  );
};

export default ChatsList;
