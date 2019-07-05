import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/menubuttons.css';
import building from '../assets/images/build4.gif';
import troop from '../assets/images/troop1.gif';


const leaderboard = () => (
  <nav className="menu">
    <button type="submit" >
      <NavLink to="/kingdom/leaderboard/buildings" className="linkbutton">
        <img src={building} alt="Pic comes here" />
        <br />
        <p>Buildings</p>
      </NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard/troops" className="linkbutton">
        <img src={troop} alt="Pic comes here" />
        <br />
        <p>Troops</p>
      </NavLink>
    </button>
  </nav>
);


export default leaderboard;
