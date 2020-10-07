import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import '../App.css';

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  cursor: pointer;
`;

const StyledHeaderWithProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  box-shadow: 0 1.6px 0 #ccc;
`;

const DropDownStyle = styled(DropDown)`
  right: 30px;
  border: 1px solid #aaa;
  background-color: white;
  cursor: pointer;
  position: absolute;
  z-index: 9;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const AvatarDiv = ({ avatarUrl, setUser }) => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <div>
      <Avatar
        src={avatarUrl}
        alt="avatar"
        onClick={() => setVisibility(!isVisible)}
      ></Avatar>
      <DropDownStyle isVisible={isVisible} setUser={setUser}></DropDownStyle>
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
