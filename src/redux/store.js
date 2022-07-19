import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterReducer from './contacts/contacts-reducer';
import { contactsApi } from './contacts/contactsAPI';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
