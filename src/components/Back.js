import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Back = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.goBack()}>
      <Button className="backBtn" text="Go Back" />
    </div>
  );
};

export default Back;
