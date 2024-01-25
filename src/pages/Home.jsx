import React, { useState } from 'react';
import SetAPIKey, { WelcomeMessage } from '../components/SetAPIKey';
import { UserAuth } from '../context/AuthContext';
import styled from 'styled-components';

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
text-align: center;
}
`;
const Home = () => {
  const [apiKey] = useState(localStorage.getItem('apiKey'));
  const { user } = UserAuth();
  return (
    <HomeContainer>
      {!apiKey && user ? (
        <SetAPIKey></SetAPIKey>
      ) : (
        <WelcomeMessage></WelcomeMessage>
      )}
    </HomeContainer>
  );
};

export default Home;
