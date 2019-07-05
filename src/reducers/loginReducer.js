
const initialState = {
  token: 2345234523453245,
  status: 'logged out',
  error: '',
};

const loginAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('TOKEN', action.payload);
      return {
        token: action.payload,
        status: 'logged in',
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginAuthentication;
