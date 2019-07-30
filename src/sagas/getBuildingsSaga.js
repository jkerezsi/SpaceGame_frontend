import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchBuildings } from '../services/api';

export function* getBuildingsWorkerSaga() {
  try {
    const response = yield call(fetchBuildings);
    console.log(response);
    if (response.status === '200') {
      yield put({ type: 'GETBUILDINGS_SUCCESS', payload: response.data.buildings });
    }
  } catch (error) {
    yield put({ type: 'GETBUILDINGS_FAILED', payload: 'There are no buildings so far' });
  }
}

export function* getBuildingsWatcherSaga() {
  yield takeEvery('GETBUILDINGS', getBuildingsWorkerSaga);
}
