import React from 'react';
import styled from 'styled-components';
import githubSignInLogo from '../icons/githubSignIn.png';
import dotenv from 'dotenv';
dotenv.config();

const LogIn = (props) => {
  const LoginBox = styled.div`
    width: 40vw;
    height: 24vh;
    align-items: center;
    justify-content: center;
    top: 200px;
    left: 56vh;
    position: absolute;
    box-shadow: 0 0 5px #ccc;
  `;

  const Heading = styled.h2`
    margin-left: 30vh;
  `;

  const GithubSignIn = styled.div`
    margin-left: 18vh;
  `;

  return (
    <LoginBox>
      <Heading>WELCOME</Heading>
      <GithubSignIn as="a" href={process.env.REACT_APP_AUTH_URL}>
        <img src={githubSignInLogo} alt="login" />
      </GithubSignIn>
    </LoginBox>
  );
};

export default LogIn;
