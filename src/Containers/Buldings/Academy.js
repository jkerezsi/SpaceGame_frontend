import React from 'react';
import Menu from '../../Components/menu/menu';
import TroopsAdder from '../../Components/TroopsAdder';
import '../../stylesheets/academy.scss';

const Academy = () => (
  <div className="academy">
    <Menu />
    <TroopsAdder />
  </div>
);

export default Academy;
