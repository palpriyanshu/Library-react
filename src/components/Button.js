import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 10px;
  width: 100px;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;

const Button = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default Button;
