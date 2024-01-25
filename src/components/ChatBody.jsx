import styled from 'styled-components';
import MessageContainer from './Messages';
import InputSection from './InputSection';
import WelcomMessage from './WelcomeMessage';
const ChatContainerStyle = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 80px;
  align-items: center;
  height: 85vh;
  overflow: hidden;
`;

const ChatBody = ({
  messages,
  user,
  loading,
  loadingMessage,
  messagesEndRef,
  inputText,
  setInputText,
  handleSendMessage,
  deleteMessages,
}) => {
  return (
    <ChatContainerStyle>
      {messages.length === 0 ? <WelcomMessage /> : null}
      <MessageContainer
        messages={messages}
        user={user}
        loading={loading}
        loadingMessage={loadingMessage}
        messagesEndRef={messagesEndRef}
      />
      <InputSection
        inputText={inputText}
        setInputText={setInputText}
        handleSendMessage={handleSendMessage}
        deleteMessages={deleteMessages}
      />
    </ChatContainerStyle>
  );
};

export default ChatBody;
