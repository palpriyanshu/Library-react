import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchApis } from '../api/fetchApis.js';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const DropDownRow = styled.div`
  cursor: 'pointer';
  padding: 10px;
  border-bottom: 1px solid #aaa;

  &:hover {
    background-color: #ccc;
  }
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
      <DropDownRow>
        <StyledLink to="/library/yourBooks">Your books</StyledLink>
      </DropDownRow>
      <DropDownRow>
        <div onClick={handleLogOut}>Log out</div>
      </DropDownRow>
    </div>
  );
};

export default DropDown;
