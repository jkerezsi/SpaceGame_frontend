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
import '../stylesheets/App.css';
import Landing from './Landing';

const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/kingdom" component={Menu} />
        <PrivateRoute exact path="/kingdom/buildings" component={addBuildingPlusMenu} />
        <PrivateRoute exact path="/kingdom/troops" component={Menu} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/kingdom/battle" component={Menu} />
        <PrivateRoute exact path="/kingdom/leaderboard" component={leaderboardContent} />
        <PrivateRoute exact path="/kingdom/leaderboard/buildings" component={Menu} />
        <PrivateRoute exact path="/kingdom/leaderboard/troops" component={Menu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  </Router>
);

export default App;
