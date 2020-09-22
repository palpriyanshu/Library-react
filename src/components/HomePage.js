import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <p>
        spend less time searching so you can spend more time actually reading!
      </p>
      <p>"Today a reader, tomorrow a leader.” – Margaret Fuller</p>
      <button>
        <Link to="/logIn">Log In</Link>
      </button>
    </div>
  );
};

export default HomePage;
