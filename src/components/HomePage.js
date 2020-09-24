import React, { useState } from 'react';
import LogIn from './LogIn';

const HomePageDescriptor = ({ setVisibility }) => {
  return (
    <div className="homePage">
      <h2>
        spend less time searching so you can spend more time actually reading!
      </h2>
      <h3>"Today a reader, tomorrow a leader.” – Margaret Fuller</h3>
      <div style={{ marginLeft: '300px' }}>
        <button onClick={() => setVisibility(true)} className="loginBtn">
          Log In
        </button>
      </div>
    </div>
  );
};

const HomePage = (props) => {
  const [isVisible, setVisibility] = useState(false);
  return isVisible ? (
    <LogIn />
  ) : (
    <HomePageDescriptor setVisibility={setVisibility} />
  );
};

export default HomePage;
