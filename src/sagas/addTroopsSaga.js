import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchNewTroops } from '../services/api';

export function* addTroopsSaga() {
  try {
    const response = yield call(fetchNewTroops);
    if (response.status === 200) {
      yield put({ type: 'ADD_TROOPS_SUCCESS', payload: 'Troop successfully added.' });
    }
  } catch (error) {
    yield put({ type: 'ADD_TROOPS_FAIL', payload: 'Insufficient funds or townhall level is too low.' });
  }
}

export function* addTroopsWatcherSaga() {
  yield takeEvery('ADD_TROOPS', addTroopsSaga);
}
