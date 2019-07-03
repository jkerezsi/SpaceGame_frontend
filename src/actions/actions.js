export const userLogin = (username, password) => {
  return {
    type: 'userLogin',
    payload: {
      username, password,
    },
  };
};

export const userRegister = (username, password, kingdom) => {
  return {
    type: 'userRegister',
    payload: {
      username, password, kingdom,
    },
  };
};


export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS', payload: '' });
export const loginFailed = () => ({ type: 'LOGIN_FAILED' });
