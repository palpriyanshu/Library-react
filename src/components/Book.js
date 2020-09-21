import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const { title: name, imageUrl: img } = props.details;
  return (
    <div>
      <div
        style={{
          padding: '10px',
          textAlign: 'center',
          width: '100px',
          margin: '15px',
        }}
        value={name}
      >
        <img src={img.thumbnail} alt={name} />
        <Link to={`/library/detail/${name}`}>{name.toUpperCase()}</Link>
      </div>
    </div>
  );
};

export default Book;
