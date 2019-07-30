/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarLoggedOut from './NavbarLoggedOut';

class Navbar extends Component {
  render() {
    if (localStorage.getItem('TOKEN')) {
      return <NavbarLoggedIn />;
    }
    return <NavbarLoggedOut />;
  }
}

export default Navbar;
