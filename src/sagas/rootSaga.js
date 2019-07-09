import { all, fork } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';

export default function* rootSaga() {
  yield all([
    fork(registerWatcherSaga),
    fork(loginWatcherSaga),
  ]);
}
