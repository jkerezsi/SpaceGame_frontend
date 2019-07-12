const initialState = {
  message: '',
  error: '',
  countryList: '',
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
    case 'LIST_ALL_COUNTRY2':
      console.log(action.payload);
      return {
        ...state,
        countryList: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
