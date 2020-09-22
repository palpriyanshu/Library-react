import React from 'react';
import Header from './Header';

const LogIn = (props) => {
  return (
    <button>
      <a href="http://localhost:3002/api/authenticate">Log In</a>
    </button>
  );
};

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <p>
        spend less time searching so you can spend more time actually reading!
      </p>
      <p>"Today a reader, tomorrow a leader.” – Margaret Fuller</p>
      <LogIn />
    </div>
  );
};

export default HomePage;
