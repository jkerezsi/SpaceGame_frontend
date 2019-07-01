/* eslint-disable react/button-has-type */
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
    const { userLogin } = this.props;
    const { username, password } = this.state;
    userLogin(username, password);
  }

  // eslint-disable-next-line consistent-return
  validate = () => {
    const { username, password, error } = this.state;
    if (!username || !password) {
      this.setState({ error: 'All input fields are required' });
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="login">
        <form>
          <Input label="Username" id="username" onChange={this.handleChange} />
          <Input label="Password" id="password" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Login" />
          <p>{ this.state.error }</p>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = {
  userLogin,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
