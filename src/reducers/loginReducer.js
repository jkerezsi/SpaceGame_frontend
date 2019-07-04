
const initialState = {
  token: null,
  status: 'logged out',
  error: '',
};

const loginAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log(action);
      localStorage.setItem('TOKEN', action.payload);
      return {
        token: action.payload,
        status: 'logged in',
      };
    case 'LOGIN_FAILED':
      console.log(action);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginAuthentication;
