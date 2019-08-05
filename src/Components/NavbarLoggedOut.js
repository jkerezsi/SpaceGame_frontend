import React from 'react';
import { NavLink } from 'react-router-dom';
//import '../stylesheets/App.css';


const NavbarLoggedIn = () => (
  <div className="navbar">
    <div className="login"><NavLink className="logina" to="/login">login</NavLink></div>
    <div className="register"><NavLink to="/register">register</NavLink></div>
  </div>
);

export default NavbarLoggedIn;
