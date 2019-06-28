/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegistration } from '../actions/actions';
import Button from '../Components/Button';
import Input from '../Components/InputField';

class Register extends Component {
  state = {
    username: null,
    password: null,
    kingdom: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { userRegistration } = this.props;
    const { username, password, kingdom } = this.state;
    userRegistration(username, password, kingdom);
  }


  render() {
    return (
      <div className="registration">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <Input label="Password" id="password" onChange={this.handleChange} />
          <Input label="Kingdom name" id="kingdom" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Register" />
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
