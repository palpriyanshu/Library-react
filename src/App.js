import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import BookDetail from './components/BookDetail.js';
import BookGallery from './components/BookGallery';
import SearchableGallery from './components/SearchableGallery';

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const navBar = types.map((type) => (
    <NavLink to={`/${type}`} activeClassName="activeLink" key={type}>
      {type}
    </NavLink>
  ));
  return (
    <BrowserRouter basename="/library">
      <h1>Library</h1>
      <div>
        <div style={{ borderBottom: '1px solid grey' }}>{navBar}</div>
        <Switch>
          <Route exact path="/All">
            <BookGallery bookList={data.default} />
          </Route>
          <Route exact path="/:type">
            <SearchableGallery bookList={data.default} />
          </Route>
          <Route exact path="/detail/:title">
            <BookDetail bookList={data.default} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
