import React from 'react';
import Menu from '../../Components/menu/menu';
import video5 from '../../assets/images/battle1.mp4';
import track from '../../assets/images/.vtt';
import '../../stylesheets/battle.css';


const BattlePlusMenu = () => (
  <div className="battlePage">
    <video className="landVid" autoPlay loop>
      <source src={video5} type="video/mp4" />
      <track default kind="captions" srcLang="en" src={track} />
    </video>
    <Menu />
  </div>
);

export default BattlePlusMenu;
