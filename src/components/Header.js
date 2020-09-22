import React from 'react';
import logo from '../logo.jpeg';

const Header = (props) => (
  <div style={{ display: 'flex', borderBottom: '1px solid grey' }}>
    <img src={logo} alt="logo" style={{ width: '100px', height: '50px' }} />
    <div style={{ textAlign: 'center', fontSize: '40px', paddingLeft: '20px' }}>
      Library
    </div>
  </div>
);

export default Header;
