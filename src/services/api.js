import axios from 'axios';


// function that makes the api request and returns a Promise for response
export function fetchLogin() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/login',
  });
}

export function fetchRegister() {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/register',
  });
}
