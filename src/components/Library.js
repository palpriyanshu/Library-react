import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookGallery from './BookGallery';
import SearchableGallery from './SearchableGallery';
import Header from './Header';
import NavBar from './NavBar';

const Library = ({ data, types }) => {
  return (
    <div>
      <Header />
      <NavBar types={types} />
      <Switch>
        <Route exact path="/library/All">
          <BookGallery bookList={data.default} />
        </Route>
        <Route exact path="/library/:type">
          <SearchableGallery bookList={data.default} />
        </Route>
      </Switch>
    </div>
  );
};

export default Library;
