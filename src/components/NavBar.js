import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  margin: 20px;
  background-color: #eee;
  height: 3.6vh;
`;

const NavBar = ({ types, baseUrl }) => {
  const navBar = types.map((type) => (
    <NavLink
      to={`${baseUrl}/${type}`}
      activeClassName="activeLink"
      key={type}
      className="navDiv"
    >
      {type}
    </NavLink>
  ));

  return <StyledNavBar>{navBar}</StyledNavBar>;
};

export default NavBar;
