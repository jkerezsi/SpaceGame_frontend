import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.css';
import Navbar from './Navbar';
import Kingdom from '../Containers/Kingdom';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/Register';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/kingdom" component={Kingdom} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </Router>
);

export default App;
