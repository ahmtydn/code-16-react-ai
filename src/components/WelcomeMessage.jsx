import React from 'react';
import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  to {
    background-position: 200vh;
  }
`;

const WelcomeMessageStyle = styled.div`
  font-family: 'Arial Black', sans-serif;
  font-size: 10px;
  height: 150px;
  width: 100%;
  overflow: hidden;
  padding-top: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #3498db, #2ecc71, #e74c3c);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${rainbowAnimation} 10s linear infinite;
`;
const WelcomeMessage = () => {
  return (
    <div>
      <WelcomeMessageStyle>
        <h1>CodeBot'a Hoş Geldiniz</h1>
      </WelcomeMessageStyle>
    </div>
  );
};

export default WelcomeMessage;
