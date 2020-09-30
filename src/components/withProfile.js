import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import '../App.css';

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 40px;
`;

const StyledHeaderWithProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  box-shadow: 0 1.6px 0 #ccc;
`;

const AvatarDiv = ({ avatarUrl, setUser }) => {
  const [isVisible, setVisibility] = useState(false);
  const dropDownStyle = isVisible ? 'show' : 'hide';

  return (
    <div>
      <Avatar
        src={avatarUrl}
        alt="avatar"
        onClick={() => setVisibility(!isVisible)}
      ></Avatar>
      <DropDown className={`${dropDownStyle} dropDown`} setUser={setUser} />
    </div>
  );
};

const withProfile = (Component, avatar, setUser) => {
  return (
    <StyledHeaderWithProfile>
      <Component />
      <AvatarDiv avatarUrl={avatar} setUser={setUser} />
    </StyledHeaderWithProfile>
  );
};

export default withProfile;
