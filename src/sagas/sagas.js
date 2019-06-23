import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* sayHelloSaga() {
  yield console.log('Say hello'); //eslint-disable-line
}

function* HelloSaga() {
  try {
    const response = yield call(API.HelloWorldApi);
    yield put({
      type: 'HELLO_WORLD_SAGA_SUCCEEDED',
      payload: response.name,
    });
  } catch (error) {
    yield put({
      type: 'HELLO_WORLD_SAGA_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('HELLO_WORLD_REQUESTED', sayHelloSaga);
  yield takeEvery('HELLO_WORLD_SAGA_REQUESTED', HelloSaga);
}
