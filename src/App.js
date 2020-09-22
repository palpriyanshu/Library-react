import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import BookDetail from './components/BookDetail.js';
import Library from './components/Library';
import HomePage from './components/HomePage';

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/library">
            <Library data={data} types={types} />
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
