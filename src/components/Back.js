import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Back = () => {
  const history = useHistory();
  const handleClick = () => history.goBack();
  return <Button className="backBtn" text="Go Back" onClick={handleClick} />;
};

export default Back;
