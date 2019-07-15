import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import addBuildingReducer from './addBuildingReducer';


const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  addBuildingReducer,
  routing: routerReducer,
});

export default rootReducer;
