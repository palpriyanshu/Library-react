import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import FilteredGallery from './FilteredGallery';
import SearchableGallery from './SearchableGallery';
import NavBar from './NavBar';
import { fetchApis } from '../api/fetchApis';

const AddBtn = styled(Link)`
  color: #444;
  border: none;
  text-decoration: none;
  outline: none;
  background-color: white;
  position: absolute;
  right: 120px;
  top: 2vh;
  cursor: pointer;
  font-size: 44px;

  &:hover {
    color: black;
  }
`;

const Library = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetchApis.getBooks().then(setBookData);
  }, []);

  if (!bookData) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <AddBtn to="/library/addBook">+</AddBtn>
      <NavBar types={types} baseUrl="/library/category" />
      <Switch>
        <Route exact path="/library/category/All">
          <SearchableGallery bookList={bookData} />
        </Route>
        <Route exact path="/library/category/:type">
          <FilteredGallery bookList={bookData} />
        </Route>
      </Switch>
    </div>
  );
};

export default Library;
