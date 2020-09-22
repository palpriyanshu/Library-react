import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import BookDetail from './components/BookDetail.js';
import Library from './components/Library';
import HomePage from './components/HomePage';
import { fetchApis } from './fetchApis';

const LogIn = (props) => {
  return (
    <button>
      <a href="http://localhost:3002/api/authenticate">Log In with Github</a>
    </button>
  );
};

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const [isLoggedIn, setUser] = useState(false);

  useEffect(() => {
    fetchApis.isUserLoggedIn().then(setUser);
  }, [isLoggedIn]);

  return (
    <BrowserRouter basename="/library">
      <div>
        <Switch>
          <Route exact path="/">
            {!isLoggedIn ? (
              <HomePage />
            ) : (
              <Redirect to="/private/category/All" />
            )}
          </Route>
          <Route path="/private/category">
            <Library data={data} types={types} />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route exact path="/private/detail/:title">
            <BookDetail bookList={data.default} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
