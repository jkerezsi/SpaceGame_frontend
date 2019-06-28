import { all } from '../sagas';

import {
  loginWatcherSaga, registerWatcherSaga,
  // import other watchers from this file
} from './sessionSaga';
// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    registerWatcherSaga(),
    // add other watchers to the array
  ]);
}
