import React, { useState } from 'react';
import BookGallery from './BookGallery.js';
import searchIcon from '../icons/searchBar.png';

const SearchableGallery = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const filteredGallery = (bookList) => {
    return bookList.filter(({ title }) => {
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const filteredList = filteredGallery(props.bookList);

  return (
    <div>
      <div className={props.className}>
        <input onChange={handleChange} value={searchTerm} />
        <img src={searchIcon} alt="searchBar" className="searchIcon" />
      </div>
      <BookGallery className={props.className} bookList={filteredList} />
    </div>
  );
};

export default SearchableGallery;
