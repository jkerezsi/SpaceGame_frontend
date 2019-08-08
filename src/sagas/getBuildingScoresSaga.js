import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchbuildingLeaderboard } from '../services/api';

export function* getbuildingLeaderboardWorkerSaga(action) {
  try {
    const response = yield call(fetchbuildingLeaderboard, action.payload);
    console.log(response);
    yield put({ type: 'GET_BUILDINGLEADERBOARD_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_BUILDINGLEADERBOARD_FAIL', payload: '' });
  }
}

export function* getbuildingLeaderboardWatcherSaga() {
  yield takeEvery('GET_BUILDINGLEADERBOARD', getbuildingLeaderboardWorkerSaga);
}
