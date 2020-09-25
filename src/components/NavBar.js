import React from 'react';
import { NavLink } from 'react-router-dom';

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
  return <div className="navBar">{navBar}</div>;
};

export default NavBar;
