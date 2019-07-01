import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    registerWatcherSaga(),
  ]);
}
