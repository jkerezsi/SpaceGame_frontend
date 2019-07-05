import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateKingdomName } from '../actions/actions';
import Button from '../Components/Button';
import Input from '../Components/InputField';

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
      const {updateKingdomName } = this.props;
      const {storeToken} = this.props;
      const { newKingdomName } = this.state;
      updateKingdomName(newKingdomName, storeToken);
      console.log(newKingdomName, storeToken)
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
      <div className="settings">
        <form>
          <Input label="New Kingdom" id="newKingdomName" onChange={this.handleChange} />
          <Button onClick={this.handleClick} buttonText="Change Kingdom Name" />
          <p>{ error }</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storeToken: state.loginAuthentication.token,
  };
};


const mapDispatchToProps = {
  updateKingdomName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
