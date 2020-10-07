import React, { useState } from 'react';
import BookGallery from './BookGallery.js';
import styled from 'styled-components';
import searchIcon from '../icons/searchBar.png';

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`;

const SearchBar = styled.input`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-size: 18px;
  color: #555;
`;

const SearchArea = styled.div`
  margin: 20px;
  left: 70vw;
  top: 1vh;
  position: absolute;
  display: flex;
  border-bottom: 1px solid #ccc;

  &:hover {
    border-bottom: 1px solid #555;
  }
`;

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
      <SearchArea>
        <SearchBar onChange={handleChange} value={searchTerm}></SearchBar>
        <SearchIcon src={searchIcon} alt="searchBar"></SearchIcon>
      </SearchArea>
      <BookGallery bookList={filteredList} />
    </div>
  );
};

export default SearchableGallery;
