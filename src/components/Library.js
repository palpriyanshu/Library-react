import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilteredGallery from './FilteredGallery';
import SearchableGallery from './SearchableGallery';
import NavBar from './NavBar';

const Library = ({ data, types }) => {
  return (
    <div>
      <NavBar types={types} baseUrl="/private/category" />
      <Switch>
        <Route exact path="/private/category/All">
          <SearchableGallery bookList={data.default} />
        </Route>
        <Route exact path="/private/category/:type">
          <FilteredGallery bookList={data.default} />
        </Route>
      </Switch>
    </div>
  );
};

export default Library;
