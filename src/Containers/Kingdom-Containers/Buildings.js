import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/button.scss';

const Buildings = () => (
  <div>
    <nav className="buildingMenu">
      <button type="submit" id="button">
        <NavLink to="/kingdom/buildings/academy" className="linkbutton">
          <p>Academy</p>
        </NavLink>
      </button>
    </nav>
  </div>
);
export default Buildings;
