import axios from 'axios';
import { userLogin, userRegistration } from '../actions/actions';


// function that makes the api request and returns a Promise for response
export function fetchLogin(userLogin) {
  return axios({
    method: 'get',
    url: 'http://localhost:3007/login',
    data: userLogin,
  });
}

export function fetchRegister(userRegistration) {
  return axios({
    method: 'post',
    url: 'http://localhost:3007/register',
    data: userRegistration,
  });
}
