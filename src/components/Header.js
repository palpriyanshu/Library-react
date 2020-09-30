import React from 'react';
import styled from 'styled-components';
import logo from '../icons/logo.jpeg';

const StyledHeader = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

const AppName = styled.div`
  text-align: center;
  font-size: 40px;
  padding-left: 20px;
`;

const Header = (props) => {
  return (
    <StyledHeader {...props}>
      <Logo src={logo} alt="logo"></Logo>
      <AppName>Library</AppName>
    </StyledHeader>
  );
};

export default Header;
