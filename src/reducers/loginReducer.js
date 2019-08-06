
import { history } from '../store/configureStore';

const initialState = {
  token: '',
  status: '',
  error: '',
};

const loginAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('TOKEN', action.payload.token);
      localStorage.setItem('kingdomName', action.payload.kingdomname);
      return {
        token: action.payload.token,
        status: 'logged in',
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('TOKEN');
      localStorage.removeItem('kingdomName');
      history.push('/');
      return {
        token: null,
        status: 'logged out',
      };
    default:
      return state;
  }
};

export default loginAuthentication;
