import React from 'react';
import GetTroopsComponent from '../Components/TroopsComponent';
import Menu from '../Components/menu/menu';


const TroopsContent = () => (
  <div className="troopsPage">
    <Menu />
    <GetTroopsComponent />
  </div>
);

export default TroopsContent;
