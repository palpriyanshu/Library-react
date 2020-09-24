import React from 'react';
import githubSignInLogo from '../icons/githubSignIn.png';

const LogIn = (props) => {
  return (
    <div
      style={{
        width: '40vw',
        height: '20vh',
        border: '1px solid black',
        align: 'center',
      }}
      className={props.className}
    >
      <div className="logIn">
        <a href="http://localhost:3002/api/authenticate">
          <img src={githubSignInLogo} className="githubSignIn" />
        </a>
      </div>
    </div>
  );
};
export default LogIn;
