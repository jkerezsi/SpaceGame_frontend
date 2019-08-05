eslint-disable react/prop-types
eslint-disable arrow-body-stlye
eslint-disable jsx-a11y/label-has-associated-control


import React from 'react';
import { connect } from 'react-redux';
import { getBuildingsAction } from '../actions/actions';
import '../stylesheets/App.css';


class GetBuildingsComponent extends React.Component {
  componentWillMount() {
    this.countBuildings();
  }

  countBuildings = () => {
    const { getBuildingsAction } = this.props;
    return getBuildingsAction();
  }

  render() {
    const { building } = this.props;
    if (building.length >= 1) {
      return (
        <div className="buildings">
          {building.map((buildings, i) => (
            <div className="building">
              <h4>Building nr
                 {i + 1}:
              </h4>
              <h4>
                {buildings.type}
              </h4>
            </div>
          ))}
        </div>
      );
    }
    return <h1 className="buildings">There are no buildings</h1>;
  }
}

const mapStateToProps = state => ({
  building: state.getBuildingsReducer.status,
});

const mapDispatchToProps = {
  getBuildingsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetBuildingsComponent);
