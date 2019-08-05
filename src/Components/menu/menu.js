import React from 'react';
import { NavLink } from 'react-router-dom';
import building from '../../assets/images/build4.gif';
import battle from '../../assets/images/battle1.gif';
import leaderboard from '../../assets/images/leader1.gif';
import troop from '../../assets/images/troop1.gif';
import ShowResources from '../resources';
import '../../stylesheets/menu.css';


const Menu = () => (
  <div>
    <nav className="menu">
      <button className="buildingsButton" type="submit">
        <NavLink to="/kingdom/buildings" className="linkbutton">
          <img src={building} alt="Pic comes here" />
          <br />
          <p>Buildings</p>
        </NavLink>
      </button>

      <button className="troopsButton" type="submit">
        <NavLink to="/kingdom/troops" className="linkbutton">
          <img src={troop} alt="Pic comes here" />
          <br />
          <p>Troops</p>
        </NavLink>
      </button>

      <button className="battleButton" type="submit">
        <NavLink to="/kingdom/battle" className="linkbutton">
          <img src={battle} alt="Pic comes here" />
          <br />
          <p>Battle</p>
        </NavLink>
      </button>

      <button className="leaderboardButton" type="submit">
        <NavLink to="/kingdom/leaderboard" className="linkbutton">
          <img src={leaderboard} alt="Pic comes here" />
          <br />
          <p>Leaderboard</p>
        </NavLink>
      </button>
      <div className="resPad" />
      <ShowResources />
    </nav>
  </div>
);


export default Menu;
