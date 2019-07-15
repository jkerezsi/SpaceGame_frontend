/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBuildingAction } from '../actions/actions';
import '../stylesheets/buildingbuttons.css';


class AddBuilding extends Component {

  addFarm = (e) => {
    e.preventDefault();
    const { addBuildingAction } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    addBuildingAction('farm', localStorageToken);
  };

  addMine = (e) => {
    e.preventDefault();
    const { addBuildingAction } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    addBuildingAction('mine', localStorageToken);
  }

  render() {
    const { status } = this.props;
    return (
      <div className="addBuildings">
        <button className="addFarm" type="submit" onClick={this.addFarm}>Add Farm</button>
        <button className="addMine" type="submit" onClick={this.addMine}>Add Mine</button>
        <h1 className="buildingStatus">{ status }</h1>
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
