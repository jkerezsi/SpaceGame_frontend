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
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchMap(payload) {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/register/map',
    data: payload,
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchResources() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/kingdom/resource',
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchNewBuilding(payload) {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/kingdom/buildings',
    data: payload,
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchTroops() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/kingdom/troops',
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchBuildings() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/kingdom/buildings',
  });
}

export function fetchbuildingLeaderboard() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/leaderboard/buildings',
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchTroopLeaderboard() {
  return axios({
    method: 'get',
    url: 'http://localhost:3012/leaderboard/troops',
    headers: { token: localStorage.getItem('TOKEN') },
  });
}

export function fetchNewTroops() {
  return axios({
    method: 'post',
    url: 'http://localhost:3012/kingdom/troops',
  });
}
