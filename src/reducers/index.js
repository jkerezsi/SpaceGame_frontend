import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';

const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  routing: routerReducer,
});

export default rootReducer;
