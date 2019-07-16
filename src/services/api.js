import axios from 'axios';

axios.defaults.headers.common.token = localStorage.getItem('TOKEN');

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

export function fetchMap(payload) {
  console.log(payload);
  return axios({
    method: 'post',
    url: 'http://localhost:3012/register/map',
    data: payload,
    headers: {
      token: 'eyJhbGciOiJIUzI1NiJ9.NWQyZGMyM2FmNTUyMzUyMWE0YmYzYmE3.jiWX78-uhg2VCIdTiFdEarEblw8BBNTmVVtfbZA_PGs',
    },
  });
}
