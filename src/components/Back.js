import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Back = () => {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <Button
      text="Go Back"
      onClick={handleClick}
      backgroundColor=" rgb(187, 74, 127)"
    />
  );
};

export default Back;
