import { call, take } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';

export function* registerWorkerSaga() {
  try {
    const response = yield call(fetchRegister);
    const user = response.data;
    console.log(user);
    console.log(response);
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* registerWatcherSaga() {
  yield take('userRegister');
  yield call(registerWorkerSaga);
}
