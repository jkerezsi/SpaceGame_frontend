import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import '../stylesheets/App.css';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </div>
);

export default App;
