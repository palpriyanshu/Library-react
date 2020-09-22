import React from 'react';

const LogIn = (props) => {
  return (
    <button>
      <a href="http://localhost:3002/api/authenticate">Get started</a>
    </button>
  );
};

const HomePage = (props) => {
  return (
    <div>
      <p>
        spend less time searching so you can spend more time actually reading!
      </p>
      <p>"Today a reader, tomorrow a leader.” – Margaret Fuller</p>
      <LogIn />
    </div>
  );
};

export default HomePage;
