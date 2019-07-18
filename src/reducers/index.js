import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import showResources from './resourcesReducer';
import addBuildingReducer from './addBuildingReducer';
import getTroopsReducer from './getTroopsReducer';

const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  showResources,
  addBuildingReducer,
  getTroopsReducer,
  routing: routerReducer,
});

export default rootReducer;
