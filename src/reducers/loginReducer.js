
const loginState = {
  token: null,
  status: 'logged out',
};

const loginAuthentication = (state = loginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('TOKEN', action.payload);
      console.log('action payload ok');
      console.log(localStorage);
      return {
        token: action.payload,
        status: 'logged in',
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default loginAuthentication;
