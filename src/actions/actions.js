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

export const listAllCountry = () => ({ type: 'LIST_ALL_COUNTRY', payload: '' });
export const listAllCountry2 = () => ({ type: 'LIST_ALL_COUNTRY2', payload: '' });

export const selectCountry = country => ({ type: 'SELECT_COUNTRY', payload: country });
export const selectCountrySuccess = () => ({ type: 'COUNTRY_AVAILABLE', payload: '' });
export const selectCountryReject = () => ({ type: 'COUNTRY_TAKEN', payload: '' });
