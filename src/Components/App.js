import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';
import Menu from './menu/menu';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import leaderboardContent from '../Containers/leaderboardContent';
import addBuildingPlusMenu from '../Containers/addBuilding';
import { history } from '../store/configureStore';
import Navbar from './Navbar';
import ShowResource from './resources';
import '../stylesheets/App.css';

const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route path="/kingdom" component={ShowResource} />
        <Route exact path="/kingdom" component={Menu} />
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
    </div>
  </Router>
);

export default App;
