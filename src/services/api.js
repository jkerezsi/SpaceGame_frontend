import axios from 'axios';

axios.defaults.headers.common.token = localStorage.getItem('TOKEN');

export function fetchLogin(payload) {
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
  return axios({
    method: 'put',
    url: 'http://localhost:3012/kingdom',
    data: payload,
  });
}

export function fetchBuildings() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/kingdom/buildings',
  });
}
