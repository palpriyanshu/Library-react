import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookGallery from './BookGallery';
import SearchableGallery from './SearchableGallery';

const Library = ({ data }) => {
  return (
    <div>
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
