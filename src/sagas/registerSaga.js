import { call, take } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';

export function* registerWorkerSaga() {
  try {
    const response = yield call(fetchRegister);
    const user = response.data;
    console.log(user);
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* registerWatcherSaga() {
  yield take('userRegister');
  console.log('valami');
  yield call(registerWorkerSaga);
}
