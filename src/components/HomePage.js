import React, { useState } from 'react';
import styled from 'styled-components';
import LogIn from './LogIn';
import Header from './Header';

const StyledHomePage = styled.div`
  width: 60%;
  height: 60%;
  margin-top: 20vh;
  margin-left: 40vh;
  line-height: 60px;
`;

const LogInBtnDiv = styled.div`
  margin-left: 300px;
`;
const LogInBtn = styled.button`
margin: 10px;
  padding: 10px 5px;
  width: 150px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  border-color: #eee;
}

&:hover {
  background-color: #ccc;
}
`;

const StyledHeader = styled(Header)`
  box-shadow: 0 1.6px 0 #ccc;
`;

const HomePageDescriptor = ({ setVisibility }) => {
  return (
    <StyledHomePage>
      <h2>
        spend less time searching so you can spend more time actually reading!
      </h2>
      <h3>"Today a reader, tomorrow a leader.” – Margaret Fuller</h3>
      <LogInBtnDiv>
        <LogInBtn onClick={() => setVisibility(true)}>LogIn</LogInBtn>
      </LogInBtnDiv>
    </StyledHomePage>
  );
};

const HomePage = (props) => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <div>
      <StyledHeader></StyledHeader>
      {isVisible ? (
        <LogIn />
      ) : (
        <HomePageDescriptor setVisibility={setVisibility} />
      )}
    </div>
  );
};

export default HomePage;
