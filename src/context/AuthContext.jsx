import { useContext, createContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey'));
  const navigator = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('apiKey');
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (apiKey === null) return;
    localStorage.setItem('apiKey', apiKey);
    navigator('/chat-bot');
    return () => {};
  }, [apiKey]);

  if (loading) {
    return (
      <div>
        {' '}
        <Loading />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, setApiKey }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
