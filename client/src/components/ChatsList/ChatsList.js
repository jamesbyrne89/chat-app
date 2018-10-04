import React from 'react';
import styled from 'react-emotion';

const ChatsContainer = styled('aside')`
  border: solid 1px #ccc;
`;

const ChatsList = () => {
  return <ChatsContainer>List of chats</ChatsContainer>;
};

export default ChatsList;
