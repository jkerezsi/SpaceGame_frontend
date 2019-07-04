const initialState = {
  id: '',
  username: '',
  kingdomId: '',
  error: '',
};

const registerAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        id: action.payload.id,
        username: action.payload.username,
        kingdomId: action.paylod.kingdomId,
      };
    case 'REGISTER_FAILED':
      console.log(action);
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerAuthentication;
