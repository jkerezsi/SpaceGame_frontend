import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchRegister } from '../services/api';

export function* registerWorkerSaga(action) {
  try {
    const response = yield call(fetchRegister, action.payload);
    if (response.data.status === 'error') {
      yield put({ type: 'REGISTER_FAILED', payload: response.data.message });
    } else if (response.data.status.statusCode === '200') {
      yield put({ type: 'REGISTER_SUCCESS', payload: response.data });
    }
  } catch (error) {
    (
      // eslint-disable-next-line no-console
      console.log(error)
    );
  }
}

export function* registerWatcherSaga() {
  yield takeEvery('userRegister', registerWorkerSaga);
}
