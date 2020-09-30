import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchApis } from '../api/fetchApis.js';

const StyledLink = styled(Link)`
  color: black;
`;

const LogOutOption = styled.div`
  cursor: 'pointer';
`;

const DropDown = (props) => {
  const handleLogOut = () => {
    fetchApis.logOut().then((reply) => {
      if (reply.status) {
        fetchApis.getUser().then(props.setUser);
      }
    });
  };

  return (
    <div className={props.className}>
      <div>
        <StyledLink to="/library/yourBooks">Your books</StyledLink>
      </div>
      <LogOutOption onClick={handleLogOut}>Log out</LogOutOption>
    </div>
  );
};

export default DropDown;
