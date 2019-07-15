/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { addBuildingAction } from '../actions/actions';
import '../stylesheets/buildingbuttons.css';


class AddBuilding extends Component {
  // state = {
  //   buildingType: '',
  // };

  addFarm = (e) => {
    e.preventDefault();
    // this.setState({
    //   buildingType: 'farm',
    // });
    const { addBuildingAction } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    // const { buildingType } = this.state;
    addBuildingAction('farm', localStorageToken);
  };

  addMine = (e) => {
    e.preventDefault();
    // this.setState({
    //   buildingType: 'mine',
    // });
    const { addBuildingAction } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    // const { buildingType } = this.state;
    addBuildingAction('mine', localStorageToken);
  }

  render() {
    return (
      <div>
        <button className="addFarm" type="submit" onClick={this.addFarm}>Add Farm</button>
        <button className="addMine" type="submit" onClick={this.addMine}>Add Mine</button>
        {/* <p>{ error }</p> */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     backendError: state.loginAuthentication.error,
//   };
// };

const mapDispatchToProps = {
  addBuildingAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddBuilding);
