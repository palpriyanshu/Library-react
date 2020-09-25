import React from 'react';

const Available = ({ isAvailable }) => {
  return isAvailable ? (
    <div className="available">Available</div>
  ) : (
    <div className="notAvailable">Not Available</div>
  );
};

export default Available;
