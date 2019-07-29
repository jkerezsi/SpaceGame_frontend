import React from 'react';
import { NavLink } from 'react-router-dom';
import building from '../../assets/images/build4.gif';
import battle from '../../assets/images/battle1.gif';
import leaderboard from '../../assets/images/leader1.gif';
import troop from '../../assets/images/troop1.gif';
import ShowResource from '../resources';
import video4 from '../../assets/images/kingdomVideo.mp4';
import track from '../../assets/images/.vtt';



const Menu = () => (
  <div className="kingdom">
    <video className="kingVid" autoPlay loop>
      <source src={video4} type="video/mp4" />
      <track default kind="captions" srcLang="en" src={track} />
    </video>
    
    <nav className="menu">
  
      <button type="submit">
        <NavLink to="/kingdom/buildings" className="linkbutton">
          <img src={building} alt="Pic comes here" />
          <br />
          <p>Buildings</p>
        </NavLink>
      </button>

      <button type="submit">
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
    
    <ShowResource />
  </div>
);


export default Menu;
