const initialState = {
  status: '',
  leaderboard: [],
};

const getTroopLeaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TROOPLEADERBOARD_SUCCESS':
      return {
        ...state,
        status: 'Ok',
        leaderboard: action.payload,
      };
    case 'GET_TROOPLEADERBOARD_FAIL':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default getTroopLeaderboardReducer;
