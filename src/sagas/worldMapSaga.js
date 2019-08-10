import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchMap } from '../services/api';
import { history } from '../store/configureStore';

export function* selectCountryWorkerSaga(action) {
  try {
    const response = yield call(fetchMap, action.payload);
    if (response.status === 200) {
      yield put({ type: 'COUNTRY_AVAILABLE' });
      history.push('/kingdom');
    }
  } catch (error) {
    yield put({ type: 'COUNTRY_REJECT' });
  }
}

export function* selectCountryWatcherSaga() {
  yield takeEvery('SELECT_COUNTRY', selectCountryWorkerSaga);
}
