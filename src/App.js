import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import BookGallery from './components/BookGallery';
import SearchableGallery from './components/SearchableGallery';

const App = (props) => {
  const types = ['All', 'Fiction', 'History'];
  const navBar = types.map((type) => (
    <NavLink to={`/library/${type}`} activeClassName="activeLink" key={type}>
      {type}
    </NavLink>
  ));
  return (
    <BrowserRouter>
      <div>
        <div>{navBar}</div>
        <Switch>
          <Route exact path="/library/All">
            <BookGallery bookList={data.default.slice(0, 5)} />
          </Route>
          <Route exact path="/library/:type">
            <SearchableGallery bookList={data.default.slice(0, 5)} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
