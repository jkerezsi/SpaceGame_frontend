import axios from 'axios';
import { userLogin, userRegister, updateKingdomName } from '../actions/actions';

export function fetchLogin() {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/login',
    data: userLogin,
  });
}

export function fetchRegister() {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/register',
    data: userRegister,
  });
}

export function fetchSettings() {
  return axios({
    method: 'put',
    url: 'http://localhost:3012/kingdom',
    data: updateKingdomName,
  });
}
