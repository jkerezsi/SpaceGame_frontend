import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import mapReducer from './worldMapReducer';

const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  mapReducer,
  routing: routerReducer,
});

export default rootReducer;
