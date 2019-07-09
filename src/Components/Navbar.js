/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarLoggedOut from './NavbarLoggedOut';
import '../stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    const { login } = this.props;
    if (login === 'logged in') {
      return <NavbarLoggedIn />;
    }
    return <NavbarLoggedOut />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.loginAuthentication.status,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Navbar);
