import React from 'react';
import { NavLink } from 'react-router-dom';
import building from '../assets/images/leaderBuildings.jpg';
import troop from '../assets/images/leaderTroops.jpg';
import '../stylesheets/leaderboard.scss';


const Leaderboard = () => (
  <div>
    <nav className="leaderbuttons">
      <button className="leaderBuildingsButton" type="submit">
        <NavLink to="/kingdom/leaderboard/buildings" className="linkbutton">
          <img src={building} alt="Pic comes here" />
          <br />
          <p>Buildings</p>
        </NavLink>
      </button>
      <button className="leaderTroopsButton" type="submit">
        <NavLink to="/kingdom/leaderboard/troops" className="linkbutton">
          <img src={troop} alt="Pic comes here" />
          <br />
          <p>Troops</p>
        </NavLink>
      </button>
    </nav>
  </div>
);

export default Leaderboard;
