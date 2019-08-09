import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchTroopLeaderboard } from '../services/api';

export function* getTroopLeaderboardWorkerSaga(action) {
  try {
    const response = yield call(fetchTroopLeaderboard, action.payload);
    yield put({ type: 'GET_TROOPLEADERBOARD_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_TROOPLEADERBOARD_FAIL', payload: '' });
  }
}

export function* getTroopLeaderboardWatcherSaga() {
  yield takeEvery('GET_TROOPLEADERBOARD', getTroopLeaderboardWorkerSaga);
}
