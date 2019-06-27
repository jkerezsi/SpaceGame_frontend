import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import '../stylesheets/App.css';

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default App;
