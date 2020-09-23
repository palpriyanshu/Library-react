import React from 'react';

const Button = ({ className, text }) => (
  <button className={className}>{text}</button>
);

const Available = ({ isAvailable }) => {
  return isAvailable ? (
    <Button className="available" text="Available" />
  ) : (
    <Button className="notAvailable" text="Not Available" />
  );
};

export default Available;
