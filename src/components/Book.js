import React from 'react';
import Available from './Available';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const { title: name, imageUrl: img, isAvailable, id } = props.details;
  return (
    <div>
      <div className="book" value={name}>
        <img src={img} alt={name} />
        <Link to={`/library/detail/${id}/${name}`}>{name.toUpperCase()}</Link>
        <Available isAvailable={JSON.parse(isAvailable)} />
      </div>
    </div>
  );
};

export default Book;
