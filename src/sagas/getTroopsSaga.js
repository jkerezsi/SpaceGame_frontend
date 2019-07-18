import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchTroops } from '../services/api';

export function* getTroopsSaga() {
  try {
    const response = yield call(fetchTroops);
    if (response.status === 200) {
      yield put({ type: 'GET_TROOPS_SUCCESS', payload: response.data.troops });
    }
  } catch (error) {
    yield put({ type: 'GET_TROOPS_FAIL', payload: 'There are no troops so far.' });
  }
}

export function* getTroopsWatcherSaga() {
  yield takeEvery('GET_TROOPS', getTroopsSaga);
}

