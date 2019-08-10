/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTroopsAction } from '../actions/actions';
import '../stylesheets/buildings.scss';

class AddTroops extends Component {
  state={
    message: '',
  }

  addTroops = (e) => {
    e.preventDefault();
    const { addTroopsAction, alert } = this.props;
    addTroopsAction();
    this.setState({ message: alert });
    setTimeout(() => this.setState({ message: '' }), 2000);
  };

  render() {
    const { message } = this.state;
    return (
      <div className="addBuildings">
        <button className="addFarm" type="submit" onClick={this.addTroops}>Add Troops</button>
        <h1 className="buildingStatus">{ message }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.addTroopsReducer.status,
  };
};

const mapDispatchToProps = {
  addTroopsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTroops);
