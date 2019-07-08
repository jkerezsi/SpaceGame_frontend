import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import menu from './menu/menu';
import '../stylesheets/App.css';
// import leaderboard from './leaderboard';
import leaderboardContent from '../Containers/leaderboardContent';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/kingdom" component={menu} />
      <Route exact path="/kingdom/buildings" component={menu} />
      <Route exact path="/kingdom/troops" component={menu} />
      <Route exact path="/kingdom/battle" component={menu} />
      <Route exact path="/kingdom/leaderboard" component={leaderboardContent} />
      <Route exact path="/kingdom/leaderboard/buildings" component={menu} />
      <Route exact path="/kingdom/leaderboard/troops" component={menu} />
    </Switch>
  </Router>
);

export default App;
