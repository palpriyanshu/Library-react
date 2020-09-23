import React from 'react';

const Button = ({ className, text }) => (
  <button className={`${className} button`}>{text}</button>
);

export default Button;
