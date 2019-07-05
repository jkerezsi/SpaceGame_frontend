import React from 'react';
import { Route, Switch } from 'react-router-dom';
import kindgom from './menu/kingdom';
import '../stylesheets/App.css';
// import leaderboard from './leaderboard';
import leaderboardContent from '../Containers/leaderboardContent';


const App = () => (
  <Switch>
    <Route exact path="/kingdom" component={kindgom} />
    <Route exact path="/kingdom/buildings" component={kindgom} />
    <Route exact path="/kingdom/troops" component={kindgom} />
    <Route exact path="/kingdom/battle" component={kindgom} />
    <Route exact path="/kingdom/leaderboard" component={leaderboardContent} />
    <Route exact path="/kingdom/leaderboard/buildings" />
    <Route exact path="/kingdom/leaderboard/troops" />
  </Switch>
);

export default App;
