import React from 'react';
import { NavLink } from 'react-router-dom';

const Buildings = () => (
  <div>
    <nav className="buildingMenu">
      <button type="submit">
        <NavLink to="/kingdom/buildings/academy" className="linkbutton">
          <p>Academy</p>
        </NavLink>
      </button>
    </nav>
  </div>
);

export default Buildings;
