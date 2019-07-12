import { all, fork } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';
import { settingsWatcherSaga } from './settingsSaga';
import { selectCountryWatcherSaga } from './worldMapSaga';
import { listCountryWatcherSaga } from './listCountry';

export default function* rootSaga() {
  yield all([
    fork(settingsWatcherSaga),
    fork(registerWatcherSaga),
    fork(loginWatcherSaga),
    fork(selectCountryWatcherSaga),
    fork(listCountryWatcherSaga),
  ]);
}
