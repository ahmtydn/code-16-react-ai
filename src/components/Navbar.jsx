// Navbar.js

import '../styles/Navbar.css';
import React from 'react';
import LoginButton from './LoginButton';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='navbar-left'>{'Code16 | G-PRO'}</div>
        <div className='navbar-right'>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
