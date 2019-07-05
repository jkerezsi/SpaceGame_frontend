import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/menubuttons.css';
import building from '../../assets/images/build4.gif';
import battle from '../../assets/images/battle1.gif';
import leaderboard from '../../assets/images/leader1.gif';
import troop from '../../assets/images/troop1.gif';


const kingdom = () => (
  <nav className="menu">
    <button type="submit">
      <NavLink to="/kingdom/buildings" className="linkbutton">
        <img src={building} alt="Pic comes here" />
        <br />
        <p>Buildings</p>
      </NavLink>
    </button>

    <button type="submit" className="building">
      <NavLink to="/kingdom/troops" className="linkbutton">
        <img src={troop} alt="Pic comes here" />
        <br />
        <p>Troops</p>
      </NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/battle" className="linkbutton">
        <img src={battle} alt="Pic comes here" />
        <br />
        <p>Battle</p>
      </NavLink>
    </button>

    <button type="submit">
      <NavLink to="/kingdom/leaderboard" className="linkbutton">
        <img src={leaderboard} alt="Pic comes here" />
        <br />
        <p>Leaderboard</p>
      </NavLink>
    </button>
  </nav>
);


export default kingdom;
