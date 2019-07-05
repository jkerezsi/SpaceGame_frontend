export const userLogin = (username, password) => ({
  type: 'userLogin',
  payload: {
    username, password,
  },
});

export const userRegister = (username, password, kingdom) => ({
  type: 'userRegister',
  payload: {
    username, password, kingdom,
  },
});


export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS', payload: '' });
export const loginFailed = () => ({ type: 'LOGIN_FAILED', payload: '' });

export const registerSuccess = () => ({ type: 'REGISTER_SUCCESS', payload: '' });
export const registerFailed = () => ({ type: 'REGISTER_FAILED', payload: '' });
