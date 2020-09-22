import React from 'react';
import '../App.css';

const AvatarDiv = ({ avatarUrl }) => (
  <img src={avatarUrl} alt="avatar" className="avatar" />
);

const withProfile = (Component, avatar) => {
  return (
    <div className="headerWithProfile">
      <Component />
      <AvatarDiv avatarUrl={avatar} />
    </div>
  );
};

export default withProfile;
