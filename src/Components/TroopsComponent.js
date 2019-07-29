/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { connect } from 'react-redux';
import { getTroopsAction } from '../actions/actions';
import '../stylesheets/troops.css';
import '../stylesheets/App.css';


class GetTroopsComponent extends React.Component {
  componentWillMount() {
    this.countTroops();
  }

  countTroops() {
    const { getTroopsAction } = this.props;
    return getTroopsAction();
  }

  render() {
    const { troop } = this.props;
    if (troop[0]) {
      return (
        <div className="troops">
          {troop.map((troops, i) => (
            <div className="troop">
              <h4>
                Troop number:
                {i + 1}
              </h4>
              <h4>
                attack:
                {troops.attack}
              </h4>
              <h4>
                defence:
                {troops.attack}
              </h4>
            </div>
          ))}
        </div>
      );
    }
    return <h1 className="troops">There are no troops.</h1>;
  }
}

const mapStateToProps = state => ({
  troop: state.getTroopsReducer.status,
});

const mapDispatchToProps = {
  getTroopsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetTroopsComponent);
