import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <div className="header">
      <div><NavLink to="/">Landing</NavLink></div>
      <div><NavLink to="/login">Login</NavLink></div>
      <div><NavLink to="/register">Register</NavLink></div>
    </div>
  </nav>
);

export default Navbar;
