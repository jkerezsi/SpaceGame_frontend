const initialState = {
  status: '',
};

const getBuildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETBUILDINGS_SUCCESS':
      return {
        status: action.payload,
      };
    case 'GETBUILDINGS_FAILED':
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default getBuildingsReducer;
