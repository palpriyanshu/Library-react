import React from 'react';
import logo from '../icons/logo.jpeg';

const Header = (props) => {
  return (
    <div className={`${props.className} header`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="appName">Library</div>
    </div>
  );
};

export default Header;
