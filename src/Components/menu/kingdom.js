import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/menubuttons.css';
import building from '../../assets/building.png';
import battle from '../../assets/battle.png';
import leaderboard from '../../assets/leaderboard.gif';
import troop from '../../assets/troop3.png';


const kingdom = () => (
  <nav className="menu">
    <button type="submit">
      <NavLink to="/kingdom/buildings" className="linkbutton">
        <img src={building} alt="Pic comes here" />
        <br />
        Buildings
      </NavLink>
    </button>

    <button type="submit" className="building">
      <NavLink to="/kingdom/troops" className="linkbutton">
        <img src={troop} alt="Pic comes here" />
        <br />
        Troops
      </NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/battle" className="linkbutton">
        <img src={battle} alt="Pic comes here" />
        <br />
        Battle
      </NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/leaderboard" className="linkbutton">
        <img src={leaderboard} alt="Pic comes here" />
        <br />
        Leaderboard
      </NavLink>
    </button>
  </nav>
);


export default kingdom;
