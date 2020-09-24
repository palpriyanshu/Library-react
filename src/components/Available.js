import React from 'react';

const Available = ({ isAvailable }) => {
  return isAvailable ? (
    <div className="available button">Available</div>
  ) : (
    <div className="notAvailable button">Not Available</div>
  );
};

export default Available;
