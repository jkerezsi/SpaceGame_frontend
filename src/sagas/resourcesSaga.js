import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchResources } from '../services/api';

export function* resourcesWorkerSaga(action) {
  console.log(action);
  try {
    const response = yield call(fetchResources, action.payload);
    console.log(response);
    yield put({ type: 'GOT_RESOURCES', payload: response.data.resources });
  } catch (error) {
    yield put({ type: 'GET_RESOURCES_FAILED', payload: 'Upps something went wrong' });
  }
}

export function* resourceWatcherSaga() {
  console.log('ok');
  yield takeEvery('getResources', resourcesWorkerSaga);
}
