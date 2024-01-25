import React, { useState } from 'react';
import '../styles/Home.css';
import SetAPIKey from '../components/SetAPIKey';
import { UserAuth } from '../context/AuthContext';
import ChatBot from './ChatBot';
const Home = () => {
  const [apiKey] = useState(localStorage.getItem('apiKey'));
  const { user } = UserAuth();
  return (
    <div className='home-container' style={{ textAlign: 'center' }}>
      {!apiKey && user ? (
        <SetAPIKey></SetAPIKey>
      ) : (
        <div>
          <div className='welcome-message'>
            <h1>CodeBot'a Hoş Geldiniz</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
