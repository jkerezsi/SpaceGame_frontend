import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';


class Navbar extends Component {
  state = {
    login: true,
  };

  render() {
    const { login } = this.state;
    if (login) {
      return (
        <div className="header">
          <ul>
            <li className="kingdom"><Link to="/kingdom">Whoevers Kingdom</Link></li>
            <div className="controlBar">
              <li className="settings"><Link to="/settings">Settings</Link></li>
              <li className="logout"><Link to="/login" onClick={() => { this.setState({ login: false }); }}>Logout</Link></li>
            </div>
          </ul>
        </div>
      );
    }
    return (
      <div className="header">
        <ul>
          <li className="login"><Link to="/login" className="loginNavbar">Login</Link></li>
          <li className="register"><Link to="/register" className="registerNavbar">Register</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
