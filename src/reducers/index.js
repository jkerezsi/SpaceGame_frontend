import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import helloworld from './hello-world';

const rootReducer = combineReducers({
  helloworld,
  routing: routerReducer,
});

export default rootReducer;
