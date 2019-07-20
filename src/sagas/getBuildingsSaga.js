import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchBuildings } from '../services/api';

export function* getBuildingsWorkerSaga(action) {
  try {
    const response = yield call(fetchBuildings, action.payload);
    if (response.status === '200') {
      yield put({ type: 'GETBUILDINGS_SUCCESS', payload: response.data });
    }
  } catch (error) {
    yield put({ type: 'GETBUILDINGS_FAILED', payload: '<id> not found' });
  }
}

export function* getBuildingsWatcherSaga() {
  yield takeEvery('GETBUILDINGS', getBuildingsWorkerSaga);
}
