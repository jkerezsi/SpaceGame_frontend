const initialState = {
  message: '',
  error: '',
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTRY_AVAILABLE':
      return {
        ...state,
      };
    case 'COUNTRY_TAKEN':
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
