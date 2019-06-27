/* eslint-disable import/prefer-default-export */
import { requestUser, requestUserSuccess, requestUserError } from '../actions/actions'

// reducer with initial state
const initialState = {
  fetching: false,
  user: null,
  error: null,
};

export function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case requestUser:
      return { ...state, fetching: true, error: null };
    case requestUserSuccess:
      return { ...state, fetching: false, user: action.user };
    case requestUserError:
      return {
        ...state, fetching: false, user: null, error: action.error,
      };
    default:
      return state;
  }
}
