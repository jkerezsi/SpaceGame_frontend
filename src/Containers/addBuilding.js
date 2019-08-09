import React from 'react';
import AddBuilding from '../Components/AddBuildingComponent';
import Menu from '../Components/menu/menu';
import Buildings from './Kingdom-Containers/Buildings';


const addBuildingPlusMenu = () => (
  <div className="buildingsPage">
    <Menu />
    <Buildings />
    <AddBuilding />
  </div>
);

export default addBuildingPlusMenu;
