const initialState = {
  status: '',
};

const addTroopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TROOPS_SUCCESS':
      return {
        status: action.payload,
      };
    case 'ADD_TROOPS_FAIL':
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default addTroopsReducer;
