/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ login, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (login === 'logged in'
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}
  />
);

const mapStateToProps = state => ({
  login: state.loginAuthentication.status,
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
