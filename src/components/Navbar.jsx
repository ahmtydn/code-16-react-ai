import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  background-color: #242424;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  padding: 0px 20px;
`;

const NavbarLeft = styled.div`
  text-align: left;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLeft>{'Code16 | G-PRO'}</NavbarLeft>
        <NavbarRight>
          <LoginButton />
        </NavbarRight>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
