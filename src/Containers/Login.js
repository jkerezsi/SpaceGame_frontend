/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/actions';
import Button from '../Components/Button';
import Input from '../Components/InputField';
import video2 from '../assets/images/loginVideo.mp4';

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
        <video className= "logVid" autoPlay loop>
          <source src={video2} type="video/mp4" />
        </video> 
        <div className="gamerLogin"></div>        
        <form className="loginForm">           
          <Input label="Username" id="username" onChange={this.handleChange} />
          <label id="password" htmlFor="password">Password</label>
          <input type="password" label="Password" id="password" onChange={this.handleChange} placeholder="Password" />
          <Button onClick={this.handleClick} buttonText="Login" />
          <p>{ error }</p>
          <p>{ backendError }</p>
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
