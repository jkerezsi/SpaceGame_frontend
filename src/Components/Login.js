/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import newUser from '../actions/actions';
import Button from './Button';
import Input from './InputField';

class Login extends Component {
  state = {
    username: null,
    password: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { newUser } = this.props;
    const { username, password } = this.state;
    newUser(username, password);
  }


  render() {
    return (
      <div className="login">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <Input label="Password" id="password" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Login" />
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = {
  newUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
