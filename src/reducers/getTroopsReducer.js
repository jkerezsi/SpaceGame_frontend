const initialState = {
  status: '',
};

const getTroopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TROOPS_SUCCESS':
      return {
        status: action.payload,
      };
    case 'GET_TROOPS_FAIL':
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default getTroopsReducer;
