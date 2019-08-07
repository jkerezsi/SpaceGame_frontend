/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/actions';


class NavbarLoggedIn extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { logoutUser } = this.props;
    logoutUser();
  }

  render() {
    return (
      <div className="navbar">
        <div className="kingdom"><NavLink to="/kingdom">Kingdom Name</NavLink></div>
        <div className="controlBar">
          <div className="settings"><NavLink className="settingsa" to="/settings">Settings</NavLink></div>
          <div className="logout"><NavLink to="/login" onClick={this.handleClick}>Logout</NavLink></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(NavbarLoggedIn);
