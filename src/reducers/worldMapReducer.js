const initialState = {
  error: '',
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTRY_AVAILABLE':
      return {
        ...state,
      };
    case 'COUNTRY_REJECT':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
