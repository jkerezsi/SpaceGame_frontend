import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchNewBuilding } from '../services/api';
// import { history } from '../store/configureStore';

export function* addBuildingSaga(action) {
  console.log(action);
  try {
    const response = yield call(fetchNewBuilding, action.payload);
    if (response.status === 200) {
      yield put({ type: 'ADD_BUILDING_SUCCESS', payload: 'Building successfully added.' });
    }
  } catch (error) {
    yield put({ type: 'ADD_BUILDING_FAIL', payload: 'You cannot afford this.' });
  }
}

export function* addBuildingWatcherSaga() {
  yield takeEvery('ADD_BUILDING', addBuildingSaga);
}
