// src/pages/LoginPage.js
import React from 'react';
import GoogleLogin from '../components/Auth/GoogleLogin';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin />
    </div>
  );
}

export default LoginPage;
