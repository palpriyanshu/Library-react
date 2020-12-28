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
  right: 8.4vw;
  top: 2vh;
  cursor: pointer;
  font-size: 5.2vh;

  &:hover {
    color: black;
  }
`;

const LibrarianTag = styled.div`
  color: #444;
  border: none;
  text-decoration: none;
  outline: none;
  background-color: white;
  position: absolute;
  right: 30vw;
  top: 5vh;
  font-size: 3vh;
`;

const Library = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const [bookData, setBookData] = useState(null);
  const [isLibrarian, setLibrarian] = useState(false);

  useEffect(() => {
    fetchApis.getBooks().then(setBookData);
  }, []);

  useEffect(() => {
    fetchApis.isLibrarian().then(({ reply }) => setLibrarian(reply));
  }, []);

  if (!bookData) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {isLibrarian ? (
        <div>
          <LibrarianTag>Librarian</LibrarianTag>
          <AddBtn to="/library/addBook">+</AddBtn>
        </div>
      ) : (
        <div></div>
      )}
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
