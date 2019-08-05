import React from 'react';
import Buildings from './Kingdom-Containers/Buildings';
import Troops from './Kingdom-Containers/Troops';
import Battle from './Kingdom-Containers/Battle';
import Leaderboard from './Kingdom-Containers/Leaderboard';
import Menu from '../Components/menu/menu';
import video5 from '../assets/images/kingVid.webm';
import track from '../assets/images/.vtt';
import '../stylesheets/kingdom.css';
import '../stylesheets/navbar.css';


const Kingdom = () => (
  <div className="kingdomPage">
    <video className="kingVid" autoPlay loop>
      <source src={video5} type="video/webm" />
      <track default kind="captions" srcLang="en" src={track} />
    </video>
    <Menu />
  </div>
);

export default Kingdom;
