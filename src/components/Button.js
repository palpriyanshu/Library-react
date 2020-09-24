import React from 'react';

const Button = ({ className, text, onClick }) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
