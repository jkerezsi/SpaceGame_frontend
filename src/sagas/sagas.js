import { call, take } from 'redux-saga/effects';
// import * as API from '../services/api';
import axios from 'axios';
import userLogin from '../actions/actions';

// function that makes the api request and returns a Promise for response
function fetchUser() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/login',
  });
}

// worker saga: makes the api call when watcher saga sees the action
export function* workerSaga() {
  try {
    const response = yield call(fetchUser);
    const user = response.data.message;
    console.log(user);
    console.log(response);
  } catch (error) {
    (
      console.log(error)
    );
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield take('userLogin');
  yield call(workerSaga);
}
