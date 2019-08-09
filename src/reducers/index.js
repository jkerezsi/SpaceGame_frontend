import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import mapReducer from './worldMapReducer';
import showResources from './resourcesReducer';
import addBuildingReducer from './addBuildingReducer';
import getTroopsReducer from './getTroopsReducer';
import getBuildingLeaderboardReducer from './getBuildingLeaderboardReducer';
import addTroopsReducer from './addTroopsReducer';

const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  mapReducer,
  showResources,
  addBuildingReducer,
  addTroopsReducer,
  getTroopsReducer,
  getBuildingLeaderboardReducer,
  routing: routerReducer,
});

export default rootReducer;
