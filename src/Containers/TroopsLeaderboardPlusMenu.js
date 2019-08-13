import React from 'react';
import TroopsLeaderboard from '../Components/TroopsLeaderboard';
import Menu from '../Components/menu/menu';
import '../stylesheets/leaderTroops.scss';


const TroopsLeaderboardPlusMenu = () => (
  <div className="lTroopsPage">
    <Menu />
    <TroopsLeaderboard />
  </div>
);


export default TroopsLeaderboardPlusMenu;
