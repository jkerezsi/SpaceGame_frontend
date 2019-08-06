/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/actions';
import '../stylesheets/Navbar.css';

class NavbarLoggedIn extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    const { kingdomName } = this.props;
    return (
      <div className="header">
        <ul>
          <li className="kingdom">
            <NavLink to="/kingdom">{ (kingdomName !== '') ? kingdomName : localStorage.getItem('kingdomName') }</NavLink>
          </li>
          <div className="controlBar">
            <li className="settings"><NavLink to="/settings">Settings</NavLink></li>
            <li className="logout"><NavLink to="/login" onClick={this.handleClick}>Logout</NavLink></li>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kingdomName: state.changeKingdomName.newKingdomName,
  };
};

const mapDispatchToProps = {
  logout,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarLoggedIn);
