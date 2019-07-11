import { call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchRegister } from '../services/api';

export function* registerWorkerSaga(action) {
  try {
    const response = yield call(fetchRegister, action.payload);
    if (response.status === '200') {
      yield put({ type: 'REGISTER_SUCCESS', payload: response.data });
      yield put(push('/kingdom/map'));
    }
  } catch (error) {
    yield put({ type: 'REGISTER_FAILED', payload: 'Username is already taken!' });
  }
}

export function* registerWatcherSaga() {
  yield takeEvery('userRegister', registerWorkerSaga);
}
