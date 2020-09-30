import React from 'react';
import styled from 'styled-components';

const Button = ({ text, backgroundColor, ...rest }) => {
  const StyledButton = styled.button`
    margin: 10px;
    width: 100px;
    border-radius: 4px;
    background-color: ${backgroundColor};
    cursor: pointer;
  `;
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default Button;
