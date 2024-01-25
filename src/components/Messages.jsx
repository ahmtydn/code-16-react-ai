import styled from 'styled-components';
import GPTLogo from './GPTLogo';
import MarkdownPreview from '@uiw/react-markdown-preview';

const MessageContainerStyle = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  width: 75%;
  padding-top: 130px;
  padding-bottom: 130px;
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const Message = styled.div`
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const UserImageName = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserName = styled.div`
  margin-left: 10px;
  color: #fff;
  font-weight: 600;
`;

const MessageText = styled.div`
  padding-left: 40px;
  padding-bottom: 20px;
`;

const MessageContainer = ({
  messages,
  user,
  loading,
  loadingMessage,
  messagesEndRef,
}) => {
  return (
    <MessageContainerStyle>
      {messages.map((message, index) => (
        <Message key={index}>
          <UserImageName>
            {message.isUser ? (
              <>
                <img
                  src={user.photoURL}
                  alt='Profil Resmi'
                  className='img-circle'
                />
                <UserName>{user.displayName}</UserName>
              </>
            ) : (
              <>
                <GPTLogo className='img-circle' />
                <UserName>ChatBot</UserName>
              </>
            )}
          </UserImageName>
          <MessageText>
            <MarkdownPreview
              source={message.text}
              style={{ backgroundColor: 'transparent' }}
              rehypeRewrite={(node, index, parent) => {
                if (
                  node.tagName === 'a' &&
                  parent &&
                  /^h(1|2|3|4|5|6)/.test(parent.tagName)
                ) {
                  parent.children = parent.children.slice(1);
                }
              }}
            />
          </MessageText>
        </Message>
      ))}
      {loading && (
        <Message>
          <UserImageName>
            <GPTLogo className='img-circle' />
            <UserName>ChatBot</UserName>
          </UserImageName>
          <MessageText>{loadingMessage}</MessageText>
        </Message>
      )}
      <div ref={messagesEndRef} />
    </MessageContainerStyle>
  );
};

export default MessageContainer;
