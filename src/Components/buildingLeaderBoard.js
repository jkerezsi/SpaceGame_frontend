// eslint-disable-next-line class-methods-use-this
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { getbuildingLeaderboardAction } from '../actions/actions';
import '../stylesheets/buildingLeaderBoard.scss';

class GetBuildingLeaderboard extends React.Component {
  state = {
    howManyToShow: 5,
  }

  constructor(props) {
    super(props);
    this.showLess = this.showLess.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  componentWillMount() {
    const { getbuildingLeaderboardAction } = this.props;
    return getbuildingLeaderboardAction();
  }

  getkingdomScoreFromProps() {
    const { leaderboard } = this.props;
    const { howManyToShow } = this.state;
    return (
      <div className="buildingLeaderboardContainer">
        <button id="showLess" type="button" onClick={this.showLess}>Show less</button>
        <div className="buildingLeaderboard">
          {leaderboard.slice(0, howManyToShow).map(leaderboard => (
            <div className="leaderboardElement">
              <h4>{leaderboard.kingdomName}</h4>
              <h6>
                Number of buildings:
                {leaderboard.numberOfBuildings}
              </h6>
            </div>
          ))}
        </div>
        <button id="showMore" type="button" onClick={this.showMore}>Show more</button>
      </div>
    );
  }

  showLess() {
    const { howManyToShow } = this.state;
    this.setState({ howManyToShow: howManyToShow - 5 });
  }

  showMore() {
    const { howManyToShow } = this.state;
    const { howManyToShow2 } = this.props;
    console.log(howManyToShow2);
    this.setState({ howManyToShow: howManyToShow + 5 });
  }


  render() {
    const { leaderboard } = this.props;
    if (leaderboard.length === 0) {
      return <h1 className="troops">There are no kingdomz to show.</h1>;
    }
    return (
      this.getkingdomScoreFromProps()
    );
  }
}

const mapStateToProps = state => ({
  leaderboard: state.getBuildingLeaderboardReducer.leaderboard,
  status: state.getBuildingLeaderboardReducer.status,
});

const mapDispatchToProps = {
  getbuildingLeaderboardAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetBuildingLeaderboard);
