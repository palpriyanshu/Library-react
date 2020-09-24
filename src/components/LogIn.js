import React from 'react';
import githubSignInLogo from '../icons/githubSignIn.png';

const LogIn = (props) => {
  return (
    <div className="logInBox">
      <h2 style={{ marginLeft: '30vh' }}>WELCOME</h2>
      <a href="http://localhost:3002/api/authenticate" className="githubSignIn">
        <img src={githubSignInLogo} />
      </a>
    </div>
  );
};
export default LogIn;
