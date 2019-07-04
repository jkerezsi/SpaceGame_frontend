import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/menubuttons.css';


const leaderboard = () => (
  <nav>
    <button type="submit" >
      <NavLink to="/kingdom/leaderboard/buildings" className="linkbutton">Buildings</NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard/troops" className="linkbutton">Troops</NavLink>
    </button>
  </nav>
);


export default leaderboard;
