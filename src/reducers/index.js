import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer'

const rootReducer = combineReducers({
  loginAuthentication,
  registerAuthentication,
  routing: routerReducer,
});

export default rootReducer;
