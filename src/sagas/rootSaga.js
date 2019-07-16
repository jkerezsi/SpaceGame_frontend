import { all, fork } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';
import { settingsWatcherSaga } from './settingsSaga';
import { resourceWatcherSaga } from './resourcesSaga';
import { addBuildingWatcherSaga } from './addBuildingSaga';

export default function* rootSaga() {
  yield all([
    fork(settingsWatcherSaga),
    fork(registerWatcherSaga),
    fork(loginWatcherSaga),
    fork(resourceWatcherSaga),
    fork(addBuildingWatcherSaga),
  ]);
}
