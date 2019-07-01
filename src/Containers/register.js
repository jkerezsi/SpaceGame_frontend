/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegistration } from '../actions/actions';
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
      username, password, kingdom, error,
    } = this.state;
    if (!username || !password) {
      this.setState({ error: 'Username and password are required!' });
    } else if (password.length < 8) {
      this.setState({ error: ' Password must contain at least 8 characters!' });
    } else {
      return true;
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { userRegistration } = this.props;
    const { username, password, kingdom } = this.state;
    if (kingdom === '' || kingdom === null) {
      this.setState({ kingdom: `${username}'s kingdom` });
    }
    userRegistration(username, password, kingdom);
    console.log(username, password, kingdom);
  }


  render() {
    return (
      <div className="registration">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" label="Password" id="password" onChange={this.handleChange} placeholder="Password" />
          <Input label="Kingdom name" id="kingdom" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Register" />
          <p>{ this.state.error }</p>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = {
  userRegistration,
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
