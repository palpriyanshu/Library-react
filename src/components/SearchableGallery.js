import React from 'react';
import { useParams } from 'react-router-dom';
import BookGallery from './BookGallery';

const SearchableGallery = (props) => {
  const { type } = useParams();
  const filteredBooks = props.bookList.filter(({ Genre }) =>
    Genre.includes(type)
  );
  return <BookGallery bookList={filteredBooks} />;
};

export default SearchableGallery;
