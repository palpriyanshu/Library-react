import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchApis } from '../fetchApis.js';
import '../App.css';

const DropDown = (props) => {
  const handleLogOut = () => {
    fetchApis.logOut().then((reply) => {
      if (reply.status) {
        fetchApis.getUser().then(props.setUser);
      }
    });
  };

  return (
    <div className={props.className}>
      <Link to="/library/yourBooks">your books</Link>
      <div onClick={handleLogOut} style={{ cursor: 'pointer' }}>
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
