/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/actions';
import ButtonL from '../Components/ButtonLogin';
import Input from '../Components/InputField';
import video2 from '../assets/images/loginVideo.mp4';
import track from '../assets/images/.vtt';
import '../stylesheets/login.scss';
import '../stylesheets/Navbar.scss';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.setState({
      error: '',
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid === true) {
      const { userLogin } = this.props;
      const { username, password } = this.state;
      userLogin(username, password);
    }
    return false;
  }

  validate = () => {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: 'All input fields are required!' });
      return false;
    }
    return true;
  };

  render() {
    const { error } = this.state;
    const { backendError } = this.props;
    return (
      <div className="login">
        <video className="logVid" autoPlay loop>
          <source src={video2} type="video/mp4" />
          <track default kind="captions" srcLang="en" src={track} />
        </video>
        <div className="gamerLogin" />
        <form className="loginForm">
          <Input label="Username" id="username" autocomplete="off" onChange={this.handleChange} />
          <label id="password" htmlFor="password">Password</label>
          <input type="password" label="Password" id="password" onChange={this.handleChange} placeholder="Password" />
          <ButtonL onClick={this.handleClick} buttonText="Login" />
          <p className="errorLog">{ error }</p>
          <p className="errorLog">{ backendError }</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backendError: state.loginAuthentication.error,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
