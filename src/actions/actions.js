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

// eslint-disable-next-line camelcase
export const selectCountry = country_code => ({ type: 'SELECT_COUNTRY', payload: { country_code } });
export const selectCountrySuccess = () => ({ type: 'COUNTRY_AVAILABLE', payload: '' });
export const selectCountryReject = () => ({ type: 'COUNTRY_REJECT', payload: 'Country code is required!' });

export const getResources = token => ({
  type: 'getResources',
  payload: {
    token,
  },
});

export const gotResources = () => ({ type: 'GOT_RESOURCES', payload: '' });
export const FailedGotResources = () => ({ type: 'GET_RESOURCES_FAILED', payload: '' });

export const addBuildingAction = (type, token) => ({ type: 'ADD_BUILDING', payload: { type, token } });
export const addBuildingSuccess = () => ({ type: 'ADD_BUILDING_SUCCESS', payload: '' });
export const addBuildingFail = () => ({ type: 'ADD_BUILDING_FAIL', payload: '' });

export const getTroopsAction = () => ({ type: 'GET_TROOPS', payload: '' });
export const getTroopsSuccess = () => ({ type: 'GET_TROOPS_SUCCESS', payload: '' });
export const getTroopsFail = () => ({ type: 'GET_TROOPS_FAIL', payload: '' });

export const addTroopsAction = () => ({ type: 'ADD_TROOPS', payload: '' });
export const addTroopsSuccess = () => ({ type: 'ADD_TROOPS_SUCCESS', payload: '' });
export const addTroopsFail = () => ({ type: 'ADD_TROOPS_FAIL', payload: '' });

