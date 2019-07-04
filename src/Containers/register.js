/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../actions/actions';
import Button from '../Components/Button';
import Input from '../Components/InputField';

class Register extends Component {
  state = {
    username: '',
    password: '',
    kingdom: '',
    error: '',
  }

  validate = () => {
    const {
      username, password,
    } = this.state;
    if (!username || !password) {
      this.setState({ error: 'Username and password are required!' });
      return false;
    } if (password.length < 8) {
      this.setState({ error: 'Password must contain at least 8 characters!' });
      return false;
    }
    return true;
  };

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
      // eslint-disable-next-line react/prop-types
      const { userRegister } = this.props;
      const { username, password, kingdom } = this.state;
      userRegister(username, password, kingdom);
    }
    return false;
  };


  render() {
    const { error } = this.state;
    return (
      <div className="registration">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" label="Password" id="password" onChange={this.handleChange} placeholder="Password" />
          <Input label="Kingdom name" id="kingdom" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Register" />
          <p>{ error }</p>
          <p>{ this.props.error }</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    error: state.registerAuthentication.error,
  };
};


const mapDispatchToProps = {
  userRegister,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
