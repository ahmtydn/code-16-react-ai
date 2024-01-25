import React, { useEffect, useRef, useState } from 'react';
import '../styles/ChatBot.css';
import SendIcon from '@mui/icons-material/Send';
import { UserAuth } from '../context/AuthContext';
import GPTLogo from '../components/GPTLogo';
import axios from 'axios';
import MarkdownPreview from '@uiw/react-markdown-preview';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ChatBot = () => {
  const { user } = UserAuth();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const deleteMessages = () => {
    setMessages([]);
  };
  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    const apiKey = localStorage.getItem('apiKey');
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, isUser: true },
    ]);
    setLoading(true);
    setInputText('');
    const response = await axios.post(
      'https://api.ahmetaydin.dev/api/v1/ask-ai',
      {
        prompt: inputText,
        api_key: apiKey,
      }
    );
    console.log(response);
    if (response.data.status === 'success') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.response, isUser: false },
      ]);
      setLoading(false);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.message, isUser: false },
      ]);
      setLoading(false);
    }
  };

  const [loadingMessage, setLoadingMessage] = useState('.');

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingMessage((prevMessage) =>
          prevMessage.length < 3 ? prevMessage + '.' : '.'
        );
      }, 500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className='chatbot-container'>
      {messages.length === 0 ? (
        <div className='welcome-message'>
          <h1>CodeBot'a Hoş Geldiniz</h1>
        </div>
      ) : null}
      <div className='message-container'>
        {messages.map((message, index) => (
          <div key={index} className={`message`}>
            {message.isUser ? (
              <div className='user-img-name'>
                <img
                  src={user.photoURL}
                  alt='Profil Resmi'
                  className='img-circle'
                />
                <div className='user-name'>{user.displayName}</div>
              </div>
            ) : (
              <div className='user-img-name'>
                <GPTLogo className='img-circle'></GPTLogo>
                <div className='user-name'>ChatBot</div>
              </div>
            )}
            <div className='message-text'>
              {' '}
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
            </div>
          </div>
        ))}{' '}
        {loading && (
          <div className='message'>
            <div className='user-img-name'>
              <GPTLogo className='img-circle'></GPTLogo>
              <div className='user-name'>ChatBot</div>
            </div>
            <div className='message-text'>{loadingMessage}</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className='input-section'>
        <div className='delete-messages'>
          <DeleteForeverIcon
            onClick={deleteMessages}
            className='delete-icon'
          ></DeleteForeverIcon>
        </div>

        <div className='input-container'>
          <input
            type='text'
            value={inputText}
            placeholder='Mesajınızı yazınız...'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            onChange={(e) => setInputText(e.target.value)}
            className='input-field'
          />
          <SendIcon
            onClick={handleSendMessage}
            className='send-button'
          ></SendIcon>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
