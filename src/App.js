import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import BookDetail from './components/BookDetail.js';
import Header from './components/Header';
import withProfile from './components/withProfile';
import LogIn from './components/LogIn';
import Library from './components/Library';
import HomePage from './components/HomePage';
import { fetchApis } from './fetchApis';
import YourBook from './components/YourBooks';

const HeaderWithAvatar = ({ avatar, setUser }) =>
  withProfile(Header, avatar, setUser);

const App = (props) => {
  const types = ['All', 'Fiction', 'History', 'Fantassy', 'Art', 'Religion'];
  const [user, setUser] = useState(null);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetchApis.getUser().then(setUser);
  }, []);

  useEffect(() => {
    fetchApis.getBooks().then(setBookData);
  }, []);

  if (!bookData) {
    return <p>Loading</p>;
  }

  return (
    <BrowserRouter>
      <div>
        {user ? (
          <HeaderWithAvatar avatar={user.avatarUrl} setUser={setUser} />
        ) : (
          <Header className="borderBottom" />
        )}
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/library/category/All" /> : <HomePage />}
          </Route>
          <Route exact path="/logIn">
            {user ? <Redirect to="/library/category/All" /> : <LogIn />}
          </Route>
          <Route path="/library/category">
            {user ? <Library data={bookData} types={types} /> : <HomePage />}
          </Route>
          <Route exact path="/library/detail/:title">
            {user ? (
              <BookDetail bookList={bookData} setBookData={setBookData} />
            ) : (
              <HomePage />
            )}
          </Route>

          <Route path="/library/yourBooks">
            <YourBook />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
