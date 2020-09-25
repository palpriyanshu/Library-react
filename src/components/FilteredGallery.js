import React from 'react';
import { useParams } from 'react-router-dom';
import SearchableGallery from './SearchableGallery.js';

const FilteredGallery = (props) => {
  const { type } = useParams();
  const filteredBooks = props.bookList.filter(({ Genre }) =>
    Genre.includes(type)
  );
  return <SearchableGallery bookList={filteredBooks} className="searchBar" />;
};

export default FilteredGallery;
