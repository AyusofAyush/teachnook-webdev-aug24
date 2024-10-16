import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  console.log('Dummy ENV::>>', process.env.REACT_APP_DUMMY_ENV);
  return (
    <div className="page-container">
      <h1 className="page-title">Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
