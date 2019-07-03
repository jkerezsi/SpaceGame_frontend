import { call, take, put } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';
import { userRegister } from '../actions/actions';

export function* registerWorkerSaga() {
  try {
    const response = yield call(fetchRegister);
    // const user = response.data;
    console.log(response.data.message);
    if (response.data.status === 'error') {
      yield put({ type: 'userRegister', error: response.data.message });
    }
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* registerWatcherSaga() {
  yield take(userRegister);
  yield call(registerWorkerSaga);
}
