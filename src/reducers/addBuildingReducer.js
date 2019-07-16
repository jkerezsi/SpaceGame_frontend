const initialState = {
  status: '',
};

const addBuildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUILDING_SUCCESS':
      return {
        status: action.payload,
      };
    case 'ADD_BUILDING_FAIL':
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default addBuildingReducer;
