const initialState = {
  token: '',
  status: '',
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
    case 'LOGOUT':
      localStorage.removeItem('TOKEN');
      return {
        token: null,
        status: 'logged out',
      };
    default:
      return state;
  }
};

export default loginAuthentication;
