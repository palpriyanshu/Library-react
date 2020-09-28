import React from 'react';
import githubSignInLogo from '../icons/githubSignIn.png';
import dotenv from 'dotenv';
dotenv.config();

const LogIn = (props) => {
  return (
    <div className="logInBox">
      <h2 style={{ marginLeft: '30vh' }}>WELCOME</h2>
      <a href={process.env.REACT_APP_AUTH_URL} className="githubSignIn">
        <img src={githubSignInLogo} alt="login" />
      </a>
    </div>
  );
};
export default LogIn;
