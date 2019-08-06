/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateKingdomName } from '../actions/actions';
import ButtonS from '../Components/ButtonSettings';
import Input from '../Components/InputField';
import '../stylesheets/settings.css';


class Settings extends Component {
  state = {
    newKingdomName: '',
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
      const { updateKingdomName } = this.props;
      const localStorageToken = localStorage.getItem('TOKEN');
      const { newKingdomName } = this.state;
      updateKingdomName(newKingdomName, localStorageToken);
    }
    return false;
  }

  validate = () => {
    const { newKingdomName } = this.state;
    if (newKingdomName === '') {
      this.setState({ error: 'Kingdom name is required' });
      return false;
    }
    return true;
  };

  render() {
    const { error } = this.state;
    return (
      <div className="settingsPage">
        <div className="ball1" />
        <div className="ball2" />
        <form className="settingsForm">
          <Input label="New Kingdom name" id="newKingdomName" onChange={this.handleChange} />
          <ButtonS onClick={this.handleClick} buttonText="Change Kingdom Name" />
          <p className="errorSet">{ error }</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storeToken: state.loginAuthentication.token,
});


const mapDispatchToProps = {
  updateKingdomName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
