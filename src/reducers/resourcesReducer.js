const initialState = {
  food: '',
  gold: '',
  error: '',
};

const showResources = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_RESOURCES':
      return {
        food: action.payload[0].amount,
        gold: action.payload[1].amount,
      };
    case 'REGISTER_FAILED':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default showResources;
