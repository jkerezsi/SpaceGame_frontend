export const userLogin = (username, password) => {
  console.log(username, password);
  return {
    type: 'userLogin',
    payload: {
      username, password,
    },
  };
};

export const userRegistration = (username, password, kingdom) => {
  console.log(username, password, kingdom);
  return {
    type: 'userRegister',
    payload: {
      username, password, kingdom,
    },
  };
};


export const requestUser = () => ({ type: 'REQUESTED_USER' });
