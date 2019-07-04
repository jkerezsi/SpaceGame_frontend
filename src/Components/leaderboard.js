import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/menubuttons.css';
import building from '../assets/building.png';
import troop from '../assets/troop3.png';


const leaderboard = () => (
  <nav className="menu">
    <button type="submit" >
      <NavLink to="/kingdom/leaderboard/buildings" className="linkbutton">
        <img src={building} alt="Pic comes here" />
        <br />
        Buildings
      </NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard/troops" className="linkbutton">
        <img src={troop} alt="Pic comes here" />
        <br />
        Troops
      </NavLink>
    </button>
  </nav>
);


export default leaderboard;
