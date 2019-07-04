import React from 'react';
import { NavLink } from 'react-router-dom';


const leaderboard = () => (
  <nav>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard/buildings">Buildings</NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard/troops">Troops</NavLink>
    </button>
  </nav>
);


export default leaderboard;
