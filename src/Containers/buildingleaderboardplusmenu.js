import React from 'react';
import GetBuildingLeaderboard from '../Components/buildingLeaderBoard';
import Menu from '../Components/menu/menu';
import '../../stylesheets/leaderBuildings.css';


const BuildingLeaderboardPlusMenu = () => (
  <div className="lBuildingsPage">
    <Menu />
    <GetBuildingLeaderboard />
  </div>
);


export default BuildingLeaderboardPlusMenu;
