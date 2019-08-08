const initialState = {
  status: '',
  leaderboard: [],
  howManyToShow: 5,
};

const getBuildingLeaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BUILDINGLEADERBOARD_SUCCESS':
      return {
        ...state,
        status: 'Ok',
        leaderboard: action.payload,
      };
    case 'GET_BUILDINGLEADERBOARD_FAIL':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default getBuildingLeaderboardReducer;
