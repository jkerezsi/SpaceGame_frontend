import React from 'react';
import { NavLink } from 'react-router-dom';


const kingdom = () => (
  <nav>
    <button type="submit">
      <NavLink to="/kingdom/buildings">Buildings</NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/troops">Troops</NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/battle">Battle</NavLink>
    </button>
    <button type="submit">
      <NavLink to="/kingdom/leaderboard">Leaderboard</NavLink>
    </button>
  </nav>
);


export default kingdom;
