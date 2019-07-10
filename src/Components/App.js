import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';
import Kingdom from '../Containers/Kingdom';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import '../stylesheets/App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/kingdom" component={Kingdom} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </Router>
);

export default App;
