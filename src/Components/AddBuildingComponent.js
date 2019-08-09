/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBuildingAction } from '../actions/actions';
import '../stylesheets/buildings.css';


class AddBuilding extends Component {
  state={
    message: '',
  }

  addFarm = (e) => {
    e.preventDefault();
    const { addBuildingAction, status } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    addBuildingAction('farm', localStorageToken);
    this.setState({ message: status });
    setTimeout(() => this.setState({ message: '' }), 2000);
  };

  addMine = (e) => {
    e.preventDefault();
    const { addBuildingAction, status } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    addBuildingAction('mine', localStorageToken);
    this.setState({ message: status });
    setTimeout(() => this.setState({ message: '' }), 2000);
  }

  render() {
    const { message } = this.state;
    return (
      <div className="addBuildings">
        <button className="addFarm" type="submit" onClick={this.addFarm}>Add Farm</button>
        <button className="addMine" type="submit" onClick={this.addMine}>Add Mine</button>
        <h1 className="buildingStatus">{ message }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.addBuildingReducer.status,
  };
};

const mapDispatchToProps = {
  addBuildingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBuilding);
