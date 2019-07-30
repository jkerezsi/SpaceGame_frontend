import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/App.css'


const NavbarLoggedIn = () => (
  <div className="header">
    <div className="login"><NavLink to="/login" className="loginNavbar">Login</NavLink></div>
    <div className="register"><NavLink to="/register" className="registerNavbar">Register</NavLink></div>
  </div>
);

export default NavbarLoggedIn;
