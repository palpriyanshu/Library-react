import React from 'react';
import Book from './Book';

const BookGallery = function (props) {
  return (
    <div style={{ display: 'flex' }}>
      {props.bookList.map((details) => (
        <Book key={details.id} details={details} />
      ))}
    </div>
  );
};

export default BookGallery;
