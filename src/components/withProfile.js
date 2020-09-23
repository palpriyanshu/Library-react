import React, { useState } from 'react';
import { fetchApis } from '../fetchApis.js';
import '../App.css';

const DropDown = (props) => {
  const handleClick = (props) => {
    fetchApis.logOut().then((reply) => {
      if (reply) {
        fetchApis.getUser().then(props.setUser);
      }
    });
  };

  return (
    <div className={props.className}>
      <div>your books</div>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        logOut
      </div>
    </div>
  );
};

const AvatarDiv = ({ avatarUrl, setUser }) => {
  const [isVisible, setVisibility] = useState(false);
  const dropDownStyle = isVisible ? 'show' : 'hide';

  return (
    <div>
      <img
        src={avatarUrl}
        alt="avatar"
        className="avatar"
        onClick={() => setVisibility(!isVisible)}
      />
      <DropDown className={`${dropDownStyle} dropDown`} setUser={setUser} />
    </div>
  );
};

const withProfile = (Component, avatar, setUser) => {
  return (
    <div className="headerWithProfile">
      <Component />
      <AvatarDiv avatarUrl={avatar} setUser={setUser} />
    </div>
  );
};

export default withProfile;
