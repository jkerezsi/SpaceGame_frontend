import { call, take } from 'redux-saga/effects';
import { fetchLogin } from '../services/api';


// worker saga: makes the api call when watcher saga sees the action
export function* loginWorkerSaga() {
  try {
    // data is obtained after axios call is resolved
    const response = yield call(fetchLogin);
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // redirect to home route after successful login
    // browserHistory.push('/main');
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
export function* loginWatcherSaga() {
  yield take('userLogin');
  yield call(loginWorkerSaga);
}
