import React from 'react';
import Buildings from './Kingdom-Containers/Buildings';
import Troops from './Kingdom-Containers/Troops';
import Battle from './Kingdom-Containers/Battle';
import Leaderboard from './Kingdom-Containers/Leaderboard';
import Menu from '../Components/menu/menu';
import '../stylesheets/kingdom.css';
import '../stylesheets/navbar.css';


const Kingdom = () => (
  <div className="kingdomPage">
    <Menu />
  </div>
);

export default Kingdom;
