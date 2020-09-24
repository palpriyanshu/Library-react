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
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchApis.getUser().then(setUser);
  }, []);

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
            {user ? <Library /> : <HomePage />}
          </Route>
          <Route exact path="/library/detail/:id/:title">
            {user ? <BookDetail /> : <HomePage />}
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
