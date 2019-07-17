import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchMap } from '../services/api';
import { history } from '../store/configureStore';

export function* selectCountryWorkerSaga(action) {
  console.log(action);
  try {
    const response = yield call(fetchMap, action.payload);
    console.log(response);
    if (response.status === 200) {
      yield put({ type: 'COUNTRY_AVAILABLE' });
      history.push('/login');
    }
  } catch (error) {
    yield put({ type: 'COUNTRY_REJECT' });
  }
}

export function* selectCountryWatcherSaga() {
  yield takeEvery('SELECT_COUNTRY', selectCountryWorkerSaga);
}
