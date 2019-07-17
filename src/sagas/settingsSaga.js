import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchSettings } from '../services/api';
import { history } from '../store/configureStore';


export function* settingsWorkerSaga(action) {
  try {
    const response = yield call(fetchSettings, action.payload);
    yield put({ type: 'KINGDOM_NAME_CHANGED', payload: response.data });
    history.push('/kingdom');
  } catch (error) {
    console.log(error);
  }
}

export function* settingsWatcherSaga() {
  yield takeEvery('UPDATE_KINGDOM_NAME', settingsWorkerSaga);
}
