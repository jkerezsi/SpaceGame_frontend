import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <div className="header">
      <div className="title">GAME</div>
      <div><NavLink to="/login" className="loginNavbar">Login</NavLink></div>
      <div><NavLink to="/register" className="registerNavbar">Register</NavLink></div>
    </div>
  </nav>
);

export default Navbar;
