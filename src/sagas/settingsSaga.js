import { call, take, put } from 'redux-saga/effects';
import { fetchSettings } from '../services/api';
import { updateKingdomName } from '../actions/actions';


export function* settingsWorkerSaga() {
  try {
    const response = yield call(fetchSettings);
   yield put({ type: 'KINGDOM_NAME_CHANGED', payload: response.data });
  } catch (error) {
    (
      console.log(error)
    );
  }
}

export function* settingsWatcherSaga() {
  yield take('UPDATE_KINGDOM_NAME', updateKingdomName);
  yield call(settingsWorkerSaga);
}
