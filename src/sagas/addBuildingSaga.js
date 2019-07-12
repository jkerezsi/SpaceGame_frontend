import { call, takeEvery } from 'redux-saga/effects';
import { fetchNewBuilding } from '../services/api';
// import { history } from '../store/configureStore';

export function* addBuildingSaga(action) {
  console.log(action)
  try {
    const response = yield call(fetchNewBuilding, action.payload);
    console.log(response);
    if (response.data.status === 'ok') {
      // yield put({ type: 'LOGIN_SUCCESS', payload: response.data.token });
      // history.push('/kingdom');
    }
  } catch (error) {
    // yield put({ type: 'LOGIN_FAILED', payload: 'Username or password is incorrect!' });
    console.log(error);
  }
}

export function* addBuildingWatcherSaga() {
  yield takeEvery('ADD_BUILDING', addBuildingSaga);
}
