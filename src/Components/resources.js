/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResources } from '../actions/actions';

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
    const { food, gold,error } = this.props;
    return (
      <div className="resources">
        <p>
          <span role="img" aria-label="Bread">🍞</span>
          {food}
        </p>
        <p>
          <span role="img" aria-label="Money">💰</span>
          {gold}

        </p>
        <p>{error}</p>
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
