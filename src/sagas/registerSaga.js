import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';
import { history } from '../store/configureStore';

export function* registerWorkerSaga(action) {
  try {
    const response = yield call(fetchRegister, action.payload);
    console.log(response);
    if (response.status === 200) {
      yield put({ type: 'REGISTER_SUCCESS', payload: response.data });
      history.push('/register/map');
    }
  } catch (error) {
    console.log(error);
    yield put({ type: 'REGISTER_FAILED', payload: 'Username is already taken!' });
  }
}

export function* registerWatcherSaga() {
  yield takeEvery('userRegister', registerWorkerSaga);
}
