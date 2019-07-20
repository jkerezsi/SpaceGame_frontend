import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import getBuildingsReducer from './getBuildingsReducer';

const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  getBuildingsReducer,
  routing: routerReducer,
});

export default rootReducer;
