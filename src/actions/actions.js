export const newUser = (username, password) => {
  console.log(username, password);
  return {
    type: 'userLogin',
    payload: {
      username, password,
    },
  };
};

export const userRegistration = (username, password,kingdom) => {
  console.log(username, password, kingdom);
  return {
    type: 'userLogin',
    payload: {
      username, password, kingdom,
    },
  };
};


export const requestUser = () => ({ type: 'REQUESTED_USER' });

// export const requestUserSuccess = data => ({ type: 'REQUESTED_USER_SUCCEEDED', url: data.message });

// export const requestUserError = () => ({ type: 'REQUESTED_USER_FAILED' });

// export const fetchUser = () => ({ type: 'FETCH_USER' });
