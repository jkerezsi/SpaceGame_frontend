import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './menu/menu';
import '../stylesheets/App.css';
// import leaderboard from './leaderboard';
import leaderboardContent from '../Containers/leaderboardContent';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/kingdom" component={Menu} />
      <Route exact path="/kingdom/buildings" component={Menu} />
      <Route exact path="/kingdom/troops" component={Menu} />
      <Route exact path="/kingdom/battle" component={Menu} />
      <Route exact path="/kingdom/leaderboard" component={leaderboardContent} />
      <Route exact path="/kingdom/leaderboard/buildings" component={Menu} />
      <Route exact path="/kingdom/leaderboard/troops" component={Menu} />
    </Switch>
  </Router>
);

export default App;
