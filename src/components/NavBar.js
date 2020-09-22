import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const navBar = props.types.map((type) => (
    <NavLink
      to={`/private/category/${type}`}
      activeClassName="activeLink"
      key={type}
    >
      {type}
    </NavLink>
  ));
  return <div style={{ borderBottom: '1px solid grey' }}>{navBar}</div>;
};

export default NavBar;
