import React, { useEffect, useRef, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import axios from 'axios';
import ChatBody from '../components/ChatBody';

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
    <ChatBody
      messages={messages}
      user={user}
      loading={loading}
      loadingMessage={loadingMessage}
      messagesEndRef={messagesEndRef}
      inputText={inputText}
      setInputText={setInputText}
      handleSendMessage={handleSendMessage}
      deleteMessages={deleteMessages}
    />
  );
};

export default ChatBot;
