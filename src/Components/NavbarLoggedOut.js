import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const NavbarLoggedIn = () => (
  <div className="header">
    <ul>
      <li className="login"><NavLink to="/login" className="loginNavbar">Login</NavLink></li>
      <li className="register"><NavLink to="/register" className="registerNavbar">Register</NavLink></li>
    </ul>
  </div>
);

export default NavbarLoggedIn;
