import { push } from 'react-router-redux';
import { call, take, put } from 'redux-saga/effects';
import { fetchLogin } from '../services/api';
import { userLogin } from '../actions/actions';


export function* loginWorkerSaga() {
  try {
    const response = yield call(fetchLogin);
    const { token } = response.data.token;
    console.log(response.data);
    if (response.data.status === 'ok') {
      yield put({ type: 'LOGIN_SUCCESS', payload: token });
      yield put(push('/main'));
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
  yield take(userLogin);
  yield call(loginWorkerSaga);
}
