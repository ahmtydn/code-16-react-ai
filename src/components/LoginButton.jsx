import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

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
    <div>
      {user ? (
        <div className='navbar-right'>
          <img
            className='profile-img'
            src={user.photoURL}
            alt={user.displayName}
          />
          <LogoutIcon className='logout' onClick={handleLogOut}></LogoutIcon>
        </div>
      ) : (
        <button className='login-button' onClick={handleGoogleSignIn}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
