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
      <div className="header">
        <ul>
          <li className="kingdom"><NavLink to="/kingdom">Kingdom Name</NavLink></li>
          <div className="controlBar">
            <li className="settings"><NavLink to="/settings">Settings</NavLink></li>
            <li className="logout"><NavLink to="/login" onClick={this.handleClick}>Logout</NavLink></li>
          </div>
        </ul>
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
