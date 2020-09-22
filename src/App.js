import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import NavBar from './components/NavBar';
import BookDetail from './components/BookDetail.js';
import Library from './components/Library';
import HomePage from './components/HomePage';

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];

  return (
    <BrowserRouter>
      <h1>Library</h1>
      <div>
        <Switch>
          <Route exact path="/" children={HomePage}></Route>
          <Route path="/library">
            <NavBar types={types} />
            <Library data={data} />
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
