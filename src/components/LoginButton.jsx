import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const NavbarRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  cursor: pointer;
  padding-left: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButtonContainer = styled.button`
  cursor: pointer;
`;

const LoginButton = () => {
  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/chat-bot');
    }
  }, [user]);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavbarRightContainer>
      {user ? (
        <>
          <ProfileImage src={user.photoURL} alt={user.displayName} />
          <StyledLogoutIcon onClick={handleLogOut} />
        </>
      ) : (
        <LoginButtonContainer
          className='login-button'
          onClick={handleGoogleSignIn}
        >
          Login
        </LoginButtonContainer>
      )}
    </NavbarRightContainer>
  );
};

export default LoginButton;
