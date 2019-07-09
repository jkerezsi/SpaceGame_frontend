import React from 'react';
import Buildings from './Kingdom-Containers/Buildings';
import Troops from './Kingdom-Containers/Troops';
import Battle from './Kingdom-Containers/Battle';
import Leaderboard from './Kingdom-Containers/Leaderboard';

const Kingdom = () => (
  <div>
    <Buildings />
    <Troops />
    <Battle />
    <Leaderboard />
  </div>
);

export default Kingdom;
