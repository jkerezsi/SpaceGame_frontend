import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAllCountry } from '../services/api';


export function* listCountryWorkerSaga() {
  try {
    const response = yield call(fetchAllCountry);
    console.log(response);
    if (response.status === 200) {
      yield put({ type: 'LIST_ALL_COUNTRY2', payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* listCountryWatcherSaga() {
  yield takeEvery('LIST_ALL_COUNTRY', listCountryWorkerSaga);
}
