// src/components/Auth/GoogleLogin.js
import React from 'react';

const GoogleLogin = () => {
  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <button onClick={handleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLogin;
