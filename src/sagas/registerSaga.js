import { call, take, put } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';
import { userRegister } from '../actions/actions';

export function* registerWorkerSaga() {
  try {
    const response = yield call(fetchRegister);
    if (response.data.status === 'error') {
      yield put({ type: 'REGSITER_FAILED', error: response.data.message });
    } else if (response.data.status === 'HTTP 200') {
      yield put({ type: 'REGISTER_SUCCESS', payload: response.data });
    }
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* registerWatcherSaga() {
  yield take('userRegister', userRegister);
  yield call(registerWorkerSaga);
}
