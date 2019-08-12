import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginAuthentication from './loginReducer';
import registerAuthentication from './registerReducer';
import changeKingdomName from './settingsReducer';
import getBuildingsReducer from './getBuildingsReducer';
import mapReducer from './worldMapReducer';
import showResources from './resourcesReducer';
import addBuildingReducer from './addBuildingReducer';
import getTroopsReducer from './getTroopsReducer';
import getBuildingLeaderboardReducer from './getBuildingLeaderboardReducer';
import addTroopsReducer from './addTroopsReducer';
import getTroopLeaderboardReducer from './getTroopsLeaderboardReducer';


const rootReducer = combineReducers({
  changeKingdomName,
  loginAuthentication,
  registerAuthentication,
  getBuildingsReducer,
  mapReducer,
  showResources,
  addBuildingReducer,
  addTroopsReducer,
  getTroopsReducer,
  getBuildingLeaderboardReducer,
  getTroopLeaderboardReducer,
  routing: routerReducer,
});

export default rootReducer;
