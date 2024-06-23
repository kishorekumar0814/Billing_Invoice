// src/pages/LoginPage.js
import React from 'react';
import GoogleLogin from '../components/Auth/GoogleLogin';

const LoginPage = () => (
  <div className="login-page">
    <h1>Login</h1>
    <GoogleLogin />
  </div>
);

export default LoginPage;
