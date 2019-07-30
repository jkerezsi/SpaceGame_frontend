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
    if (building !== 0) {
      return (
        <div className="buildings">
          {building.kingdom.map((buildings, i) => (
            <div className="building">
            <h4>
              Building number:
              {i + 1}
            </h4>
            <h4>
              townhall:
              {buildings.townhall}
            </h4>
            <h4>
              academy:
              {buildings.academy}
            </h4>
            <h4>
              farm:
              {buildings.farm}
            </h4>
            <h4>
              mine:
              {buildings.mine}
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
