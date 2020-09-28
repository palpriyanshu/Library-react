import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import User from '../context/UserContext.js';
import HeaderWithAvatar from '../components/hoc/HeaderWithProfile';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(User);
  if (user) {
    return (
      <div>
        <HeaderWithAvatar avatar={user.avatarUrl} setUser={setUser} />
        <Route {...rest} exact component={Component}></Route>
      </div>
    );
  }
  return <HomePage />;
};

export default PrivateRoute;
