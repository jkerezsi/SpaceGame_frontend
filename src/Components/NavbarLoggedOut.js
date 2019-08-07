import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarLoggedIn = () => (
  <div className="navbar">
    <div className="login"><NavLink className="logina" to="/login">login</NavLink></div>
    <div className="register"><NavLink className="registera" to="/register">register</NavLink></div>
  </div>
);

export default NavbarLoggedIn;
