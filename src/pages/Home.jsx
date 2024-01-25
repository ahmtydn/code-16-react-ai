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
          CodeBot'a Hoşgeldiniz
          <br />
          Lütfen Giriş Yapınız
        </div>
      )}
    </div>
  );
};

export default Home;
