import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoutes';
import BookDetail from './components/BookDetail.js';
import Library from './components/Library';
import HomePage from './components/HomePage';
import YourBook from './components/YourBooks';
import User from './context/UserContext';
import './App.css';
import { fetchApis } from './api/fetchApis';

const App = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchApis.getUser().then(setUser);
  }, []);

  return (
    <User.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/library/category/All" /> : <HomePage />}
          </Route>
          <PrivateRoute path="/library/category" component={Library} />
          <PrivateRoute path="/library/detail/:id" component={BookDetail} />
          <PrivateRoute path="/library/yourBooks" component={YourBook} />
        </Switch>
      </BrowserRouter>
    </User.Provider>
  );
};

export default App;
