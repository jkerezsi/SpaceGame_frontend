import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './menu/menu';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import leaderboardContent from '../Containers/leaderboardContent';
import addBuildingPlusMenu from '../Containers/addBuilding';
import { history } from '../store/configureStore';
import PrivateRoute from './PrivateRoute';
import TroopsContent from '../Containers/troopsContent';
import WorldMap from '../Containers/Worldmap/WorldMap';
import ShowResource from './resources';
import Landing from './Landing';
import '../stylesheets/App.css';
import '../stylesheets/navbar.css';
import Kingdom from '../Containers/Kingdom';
import BattlePlusMenu from '../Containers/Kingdom-Containers/Battle';
import LeaderTroopsPlusMenu from '../Containers/Leaderboard-Containers/Ltroops';
import LeaderBuildingsPlusMenu from '../Containers/Leaderboard-Containers/Lbuildings';


const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/kingdom" component={Kingdom} />
        <PrivateRoute exact path="/kingdom/buildings" component={addBuildingPlusMenu} />
        <PrivateRoute exact path="/kingdom/troops" component={TroopsContent} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/kingdom/battle" component={BattlePlusMenu} />
        <PrivateRoute exact path="/kingdom/leaderboard" component={leaderboardContent} />
        <PrivateRoute exact path="/kingdom/leaderboard/buildings" component={LeaderBuildingsPlusMenu} />
        <PrivateRoute exact path="/kingdom/leaderboard/troops" component={LeaderTroopsPlusMenu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/map" component={WorldMap} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  </Router>
);

export default App;
