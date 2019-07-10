import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './menu/menu';
import Kingdom from '../Containers/Kingdom';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/register';
import '../stylesheets/App.css';
import leaderboardContent from '../Containers/leaderboardContent';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/kingdom" component={Kingdom} />
      <Route exact path="/kingdom/buildings" component={Menu} />
      <Route exact path="/kingdom/troops" component={Menu} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/kingdom/battle" component={Menu} />
      <Route exact path="/kingdom/leaderboard" component={leaderboardContent} />
      <Route exact path="/kingdom/leaderboard/buildings" component={Menu} />
      <Route exact path="/kingdom/leaderboard/troops" component={Menu} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default App;
