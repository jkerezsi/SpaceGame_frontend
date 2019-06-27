import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
// import Register from '../Containers/Tribes-Login/register';
import '../stylesheets/App.css';

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/register" component={Register} /> */}
  </Switch>
);

export default App;
