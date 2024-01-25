import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const [apiKey] = useState(localStorage.getItem('apiKey'));

  if (!user) {
    return <Navigate to='/' />;
  }
  if (user && !apiKey) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;
