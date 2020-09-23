import React from 'react';
import Button from './Button';

const Available = ({ isAvailable }) => {
  console.log(isAvailable);
  return isAvailable ? (
    <Button className="available" text="Available" />
  ) : (
    <Button className="notAvailable" text="Not Available" />
  );
};

export default Available;
