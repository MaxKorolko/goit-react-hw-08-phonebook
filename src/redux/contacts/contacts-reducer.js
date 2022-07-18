import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (
      state.some(
        ({ name }) => name.toLowerCase() === payload.name.toLowerCase()
      )
    ) {
      return alert(`${payload.name} is already in contacts`);
    }
    return [...state, payload];
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
