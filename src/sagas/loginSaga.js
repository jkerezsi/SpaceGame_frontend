import { call, take, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchLogin } from '../services/api';
import { userLogin } from '../actions/actions';


export function* loginWorkerSaga() {
  try {
    const response = yield call(fetchLogin);
    console.log(response.data.token);
    if (response.data.status === 'ok') {
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data.token });
      yield put(push('/kingdom'));
    } else if (response.status === 'error') {
      yield put({ type: 'LOGIN_FAILED' });
    }
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* loginWatcherSaga() {
  yield take('userLogin', userLogin);
  yield call(loginWorkerSaga);
}
