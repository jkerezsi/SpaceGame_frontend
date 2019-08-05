/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResources } from '../actions/actions';
import foodPic from '../assets/images/food.png';
import goldPic from '../assets/images/gold.png';


class ShowResources extends Component {
  componentWillMount() {
    this.refreshInfo();
  }

  refreshInfo = () => {
    const { getResources } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    return getResources(localStorageToken);
  }


  render() {
    const { food, gold, error } = this.props;
    return (
      <div className="resources">
        <p>
          <img className="foodPic" src={foodPic} alt="Food pic" />
          {food}
        </p>
        <p>
          <img className="goldPic" src={goldPic} alt="Money pic" />
          {gold}
        </p>
        <p className="error">{error}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  food: state.showResources.food,
  gold: state.showResources.gold,
  error: state.showResources.error,
});

const mapDispatchToProps = {
  getResources,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowResources);
