import React from 'react';
import Available from './Available';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const { title: name, imageUrl: img, isAvailable } = props.details;
  return (
    <div>
      <div className="book" value={name}>
        <img src={img.thumbnail} alt={name} />
        <Link to={`/library/detail/${name}`}>{name.toUpperCase()}</Link>
        <Available isAvailable={isAvailable} />
      </div>
    </div>
  );
};

export default Book;
