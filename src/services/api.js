import axios from 'axios';

const localStorageToken = localStorage.getItem('TOKEN');
axios.defaults.headers.common.token = localStorageToken;


export function fetchLogin(payload) {
  console.log(payload);
  return axios({
    method: 'post',
    url: 'http://localhost:3012/login',
    data: payload,
  });
}

export function fetchRegister(payload) {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/register',
    data: payload,
  });
}

export function fetchSettings(payload) {
  console.log(payload);
  return axios({
    method: 'put',
    url: 'http://localhost:3012/kingdom',
    data: payload,
  });
}

export function fetchResources(payload) {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/kingdom/resource',
    data: payload,
  });
}
