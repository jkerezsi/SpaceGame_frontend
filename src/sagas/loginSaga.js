import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchLogin } from '../services/api';
import { history } from '../store/configureStore';

export function* loginWorkerSaga(action) {
  try {
    const response = yield call(fetchLogin, action.payload);
    if (response.data.status === 'ok') {
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
      history.push('/kingdom');
    }
  } catch (error) {
    yield put({ type: 'LOGIN_FAILED', payload: 'Username or password is incorrect!' });
  }
}

export function* loginWatcherSaga() {
  yield takeEvery('userLogin', loginWorkerSaga);
}
