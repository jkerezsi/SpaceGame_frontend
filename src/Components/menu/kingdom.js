import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/menubuttons.css';
import smile from '../../assets/y.png';


const kingdom = () => (
  <nav className="menu">
    <button type="submit">
      <NavLink to="/kingdom/buildings" className="linkbutton">
        <img src={smile} alt="Pic comes here" />
        <br />
        Buildings
      </NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/troops" className="linkbutton">Troops</NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/battle" className="linkbutton">Battle</NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/leaderboard" className="linkbutton">Leaderboard</NavLink>
    </button>
  </nav>
);


export default kingdom;
