import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';

const HomePage = (props) => {
  const [isVisible, setVisibility] = useState(false);
  const className = isVisible ? 'show' : 'hide';
  return (
    <div>
      <p>
        spend less time searching so you can spend more time actually reading!
      </p>
      <p>"Today a reader, tomorrow a leader.” – Margaret Fuller</p>
      <button onClick={() => setVisibility(true)}>Log In</button>
      <LogIn className={className} />
    </div>
  );
};

export default HomePage;
