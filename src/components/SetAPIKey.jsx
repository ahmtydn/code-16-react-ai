// SetAPIKey.js

import React, { useContext, useState } from 'react';
import '../styles/SetAPIKey.css';
import { UserAuth } from '../context/AuthContext';
import { Save } from '@mui/icons-material';

const SetAPIKey = () => {
  const { setApiKey } = UserAuth();
  const [inputApiKey, setInputApiKey] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setApiKey(inputApiKey);
  };

  return (
    <div className='set-api-key-container'>
      <div className='welcome-message'>
        <h1>CodeBot'a Hoş Geldiniz</h1>
      </div>
      <form onSubmit={handleSubmit} className='api-form'>
        <input
          type='text'
          value={inputApiKey}
          onChange={(e) => setInputApiKey(e.target.value)}
          placeholder='API Key'
          className='api-input'
        />
        <button type='submit' className='api-button'>
          <Save className='save-icon' />
          Kaydet
        </button>
      </form>
      <a
        href='https://makersuite.google.com/app/apikey'
        target='_blank'
        rel='noopener noreferrer'
        className='api-footer'
      >
        API Key Nasıl Alınır?
      </a>
    </div>
  );
};

export default SetAPIKey;
