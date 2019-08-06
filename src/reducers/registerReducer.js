const initialState = {
  id: '',
  username: '',
  kingdomId: '',
  error: '',
};

const registerAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      localStorage.setItem('TOKEN', action.payload.token);
      localStorage.setItem('kingdomName', action.payload.kingdomname);
      return {
        id: action.payload.userID,
        username: action.payload.username,
        kingdomId: action.payload.kingdomID,
      };
    case 'REGISTER_FAILED':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerAuthentication;
