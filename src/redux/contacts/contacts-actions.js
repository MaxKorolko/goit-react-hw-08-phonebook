import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction('user/set');

export const resetUser = createAction('user/reset');

export const filterContacts = createAction('contacts/filter');
