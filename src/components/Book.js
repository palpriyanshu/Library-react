import React from 'react';
import Available from './Available';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const { title: name, imageUrl: img, isAvailable, id } = props.details;
  return (
    <div className="book">
      <div>
        <img src={img} alt={name} className="bookCover" />
      </div>
      <Link to={`/library/detail/${id}/${name}`} className="textColor">
        {name.toUpperCase()}
      </Link>
      <Available isAvailable={JSON.parse(isAvailable)} />
    </div>
  );
};

export default Book;
