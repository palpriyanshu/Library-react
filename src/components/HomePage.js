import React, { useState } from 'react';
import LogIn from './LogIn';
import Header from './Header';

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
  return (
    <div>
      <Header className="borderBottom" />
      {isVisible ? (
        <LogIn />
      ) : (
        <HomePageDescriptor setVisibility={setVisibility} />
      )}
    </div>
  );
};

export default HomePage;
