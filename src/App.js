import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import * as data from './booksDetails.json';
import BookDetail from './components/BookDetail.js';
import Header from './components/Header';
import withProfile from './components/withProfile';
import LogIn from './components/LogIn';
import Library from './components/Library';
import HomePage from './components/HomePage';
import { fetchApis } from './fetchApis';

const HeaderWithAvatar = ({ avatar }) => withProfile(Header, avatar);

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchApis.getUser().then(setUser);
  }, []);

  return (
    <BrowserRouter basename="/library">
      <div>
        {user ? (
          <HeaderWithAvatar avatar={user.avatarUrl} />
        ) : (
          <Header className="borderBottom" />
        )}
        <Switch>
          <Route exact path="/">
            {!user ? <HomePage /> : <Redirect to="/private/category/All" />}
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
