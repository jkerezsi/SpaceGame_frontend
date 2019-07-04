import React from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../constants/ActionTypes';
import * as actions from './actions/actions';

describe('actions', () => {
  it('should create an action to allow user login', () => {
    const username = 'jani';
    const password = 'tyutyesz';
    const expectedAction = {
      type: types.userLogin,
      payload: username,
      password,
    };
    expect(actions.userLogin(username, password)).toEqual(expectedAction);
  });
});
