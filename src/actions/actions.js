export const newUser = (username, password) => {
  console.log(username, password);
  return {
    type: 'addUser',
    payload: {
      username, password,
    },
  }
};

export const requestUser = () => ({ type: 'REQUESTED_USER' });

export const requestUserSuccess = data => ({ type: 'REQUESTED_USER_SUCCEEDED', url: data.message });

export const requestUserError = () => ({ type: 'REQUESTED_USER_FAILED' });

export const fetchUser = () => ({ type: 'FETCH_USER' });
