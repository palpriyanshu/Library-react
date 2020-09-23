import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Back = ({ url }) => (
  <Link to={url}>
    <Button className="backBtn" text="Back" />
  </Link>
);

export default Back;
