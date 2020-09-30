import React from 'react';
import styled from 'styled-components';

const StyledAvailability = styled.div`
  margin: 10px;
  color: ${(props) => props.color};
`;

const Available = ({ isAvailable }) => {
  let color = 'rgb(241, 107, 107)';
  let text = 'Not Available';
  if (isAvailable) {
    color = 'rgb(71, 187, 121)';
    text = 'Available';
  }

  return <StyledAvailability color={color}>{text}</StyledAvailability>;
};

export default Available;
