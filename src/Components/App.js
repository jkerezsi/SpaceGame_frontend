import React from 'react';
import { Route, Switch } from 'react-router-dom';
import kindgom from './menu/kingdom';
import '../stylesheets/App.css';
import leaderboard from './leaderboard';

const App = () => (
  <Switch>
    <Route exact path="/kingdom" component={kindgom} />
    <Route exact path="/kingdom/buildings" />
    <Route exact path="/kingdom/troops" />
    <Route exact path="/kingdom/battle" />
    <Route exact path="/kingdom/leaderboard" component={leaderboard} />
    <Route exact path="/kingdom/leaderboard/buildings" />
    <Route exact path="/kingdom/leaderboard/troops" />
  </Switch>
);

export default App;
