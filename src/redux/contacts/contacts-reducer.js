import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default filter;
