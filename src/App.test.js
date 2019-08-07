import * as userAction from './actions/actions';

describe('userAction', () => {
  it('should create an action to allow user login', () => {
    const username = 'jani';
    const password = 'tyutyesz';
    const expectedAction = {
      type: 'userLogin',
      payload: {
        username, password,
      },
    };
    expect(userAction.userLogin(username, password)).toEqual(expectedAction);
  });
});
