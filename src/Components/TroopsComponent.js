/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTroopsAction } from '../actions/actions';
import '../stylesheets/troops.scss';


class GetTroopsComponent extends React.Component {
  componentWillMount() {
    const { getTroopsAction } = this.props;
    return getTroopsAction();
  }

  gettroopsFromProps() {
    const { troop } = this.props;
    return (
      <div className="troops">
        {[].concat(troop).sort((a, b) => b.level - a.level).map((troops, i) => (
          <button type="submit" className="trooplist">
            <NavLink to="/kingdom/buildings" className="linkbutton">
              <h4>
                Troop number:
                {i + 1}
              </h4>
              <h4>
                level:
                {troops.level}
              </h4>
              <h4>
                attack:
                {troops.attack}
              </h4>
              <h4>
                defence:
                {troops.defence}
              </h4>
            </NavLink>
          </button>
        ))}
      </div>
    );
  }

  render() {
    const { troop } = this.props;
    if (troop.length === 0) {
      return <h1 className="troops">There are no troops.</h1>;
    }
    return (
      this.gettroopsFromProps()
    );
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
