/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/actions';
import Button from '../Components/Button';
import Input from '../Components/InputField';

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
      this.setState({ error: 'All input fields are required' });
      return false;
    }
    return true;
  };

  render() {
    const { error } = this.state;

    return (
      <div className="login">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <label id="password" htmlFor="password">Password</label>
          <input type="password" label="Password" id="password" onChange={this.handleChange} placeholder="Password" />
          <Button onClick={this.handleClick} buttonText="Login" />
          <p>{ error }</p>
          <p>{ this.props.error}</p>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    error: state.loginAuthentication.error,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
