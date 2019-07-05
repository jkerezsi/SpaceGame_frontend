import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Containers/Login';
import Settings from '../Containers/Settings';
import Register from '../Containers/register';
import '../stylesheets/App.css';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/kingdom" component={Settings} />
    </Switch>
  </div>
);

export default App;
