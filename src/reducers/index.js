import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';

const rootReducer = combineReducers({
  loginAuthentication,
  routing: routerReducer,
});

export default rootReducer;
