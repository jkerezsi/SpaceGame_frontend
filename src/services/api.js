import axios from 'axios';
import { userLogin, userRegister } from '../actions/actions';

export function fetchLogin() {
  return axios({
    method: 'post',
    url: 'http://localhost:3007/login',
    data: userLogin,
  });
}

export function fetchRegister() {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/register',
    data: userRegister,
  });
}
