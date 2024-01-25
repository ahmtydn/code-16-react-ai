// SetAPIKey.js

import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Save } from '@mui/icons-material';
import styled from 'styled-components';
import WelcomeMessage from './WelcomeMessage';

const SetApiKeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ApiForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApiInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ApiButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ApiFooter = styled.a`
  margin-top: 20px;
  color: #777;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const SetAPIKey = () => {
  const { setApiKey } = UserAuth();
  const [inputApiKey, setInputApiKey] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setApiKey(inputApiKey);
  };

  return (
    <SetApiKeyContainer>
      <WelcomeMessage />
      <ApiForm onSubmit={handleSubmit}>
        <ApiInput
          type='text'
          value={inputApiKey}
          onChange={(e) => setInputApiKey(e.target.value)}
          placeholder='API Key'
        />
        <ApiButton type='submit'>
          <Save style={{ marginRight: '5px' }} />
          Kaydet
        </ApiButton>
      </ApiForm>
      <ApiFooter
        href='https://makersuite.google.com/app/apikey'
        target='_blank'
        rel='noopener noreferrer'
      >
        API Key Nasıl Alınır?
      </ApiFooter>
    </SetApiKeyContainer>
  );
};

export default SetAPIKey;

export { WelcomeMessage };
