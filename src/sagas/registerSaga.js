import { call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchRegister } from '../services/api';

export function* registerWorkerSaga(action) {
  try {
    const response = yield call(fetchRegister, action.payload);
    console.log(response);
    if (response.status === '200') {
      yield put({ type: 'REGISTER_SUCCESS', payload: response.data });
      yield put(push('/kingdom/map'));
    }
  } catch (error) {
    yield put({ type: 'REGISTER_FAILED', payload: 'Username is already taken!' });
    console.log(error);
  }
}

export function* registerWatcherSaga() {
  yield takeEvery('userRegister', registerWorkerSaga);
}
