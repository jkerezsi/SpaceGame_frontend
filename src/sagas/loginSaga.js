import { call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchLogin } from '../services/api';

export function* loginWorkerSaga(action) {
  try {
    const response = yield call(fetchLogin, action.payload);
    if (response.data.status === 'ok') {
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data.token });
      yield put(push('/kingdom'));
    } else if (response.data.status === 'error') {
      yield put({ type: 'LOGIN_FAILED', payload: response.data.error });
    }
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* loginWatcherSaga() {
  yield takeEvery('userLogin', loginWorkerSaga);
}
