import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import FilteredGallery from './FilteredGallery';
import SearchableGallery from './SearchableGallery';
import NavBar from './NavBar';
import { fetchApis } from '../fetchApis';

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
