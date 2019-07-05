import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kingdom from '../Containers/Kingdom';
import Settings from '../Containers/Settings';
import Login from '../Containers/Login';
import Register from '../Containers/Register';

const Header = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/kingdom" component={Kingdom} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  </Router>
);

export default Header;
