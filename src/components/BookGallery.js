import React from 'react';
import Book from './Book';

const BookGallery = function (props) {
  const books = props.bookList.map((details) => (
    <Book key={details.id} details={details} />
  ));

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{books}</div>;
};

export default BookGallery;