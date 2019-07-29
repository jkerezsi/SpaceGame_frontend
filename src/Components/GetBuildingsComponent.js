import React from 'react';
import { connect } from 'react-redux';
import { getBuildingsAction } from '../actions/actions';
import '../stylesheets/App.css';

class GetBuildingsComponent extends React.Component {
  componentWillMount() {
    this.refreshInfo();
  }

  refreshInfo = () => {
    const { getBuildingsAction } = this.props;
    // const localStorageToken = localStorage.getItem('TOKEN');
    // return getBuildingsAction(localStorageToken);
    return getBuildingsAction();
  }

  render() {
    const {
      // townhall, academy, farm, mine, error 
      building
    } = this.props;
    console.log(building)
    return (
      <div>
         <h4>HAAALLLLOOOOO</h4>
      </div>
    )
  //   return (
  //     <div className="buildings">
  //       {building.map((buildings, i) => (
  //         <div className="building">
  //           <h4>
  //             Troop number:
  //             {i + 1}
  //           </h4>
  //           <h4>
  //             townhall:
  //             {buildings.townhall}
  //           </h4>
  //           <h4>
  //             academy:
  //             {buildings.academy}
  //           </h4>
  //           <h4>
  //             farm:
  //             {buildings.farm}
  //           </h4>
  //           <h4>
  //             mine:
  //             {buildings.mine}
  //           </h4>
  //           <h4>

  //             error:
  //               {error}
  //             </h4>
  //           </div>
  //         ))}
  //       </div>
  //   );
  };
};

const mapStateToProps = state => ({
  building: state.GetBuildingsReducer.status,
});

const mapDispatchToProps = {
  getBuildingsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetBuildingsComponent);
