import { all, fork } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';
import { settingsWatcherSaga } from './settingsSaga';

export default function* rootSaga() {
  yield all([
    fork(settingsWatcherSaga),
    fork(registerWatcherSaga),
    fork(loginWatcherSaga),
  ]);
}
