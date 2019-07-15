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

export const updateKingdomName = (newKingdomName, token) => ({
  type: 'UPDATE_KINGDOM_NAME',
  payload: {
    newKingdomName, token,
  },
});

export const updateKingdomNameSuccess = () => ({ type: 'KINGDOM_NAME_CHANGED', payload: '' });
export const logout = () => ({ type: 'LOGOUT' });

export const getResources = token => ({
  type: 'getResources',
  payload: {
    token,
  },
});
export const gotResources = () => ({ type: 'GOT_RESOURCES', payload: '' });
export const FailedGotResources = () => ({ type: 'GET_RESOURCES_FAILED', payload: '' });
