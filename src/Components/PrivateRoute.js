/* eslint-disable react/prop-types */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ login, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('TOKEN')
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}
  />
);

export default PrivateRoute;
