import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, setUser, resetUser } from './contacts-actions';

const initialState = {
  name: '',
  token: null,
  isLoggedIn: false,
};

export const user = createReducer(
  { ...initialState },
  {
    [setUser]: (state, { payload }) => {
      return {
        ...state,
        name: payload.user.name,
        token: payload.token,
        isLoggedIn: true,
      };
    },

    [resetUser]: (state, _) => ({ ...state, ...initialState }),
  }
);

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({ user, filter });
