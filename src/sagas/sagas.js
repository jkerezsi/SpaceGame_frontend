import { takeEvery, put, call } from 'redux-saga/effects';
// import * as API from '../services/api';

import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchUser() {
  return axios({
    method: "get",
    url: "///////////"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchUser);
    const user = response.data.message;

    // dispatch a success action to the store with the new user
    yield put({ type: "API_CALL_SUCCESS", user });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}




// function* sayHelloSaga() {
//   yield console.log('Say hello'); //eslint-disable-line
// }

// function* HelloSaga() {
//   try {
//     const response = yield call(API.HelloWorldApi);
//     yield put({
//       type: 'HELLO_WORLD_SAGA_SUCCEEDED',
//       payload: response.name,
//     });
//   } catch (error) {
//     yield put({
//       type: 'HELLO_WORLD_SAGA_FAILED',
//     });
//     console.log(error); // eslint-disable-line
//   }
// }

// export default function* rootSaga() {
//   yield takeEvery('HELLO_WORLD_REQUESTED', sayHelloSaga);
//   yield takeEvery('HELLO_WORLD_SAGA_REQUESTED', HelloSaga);
// }