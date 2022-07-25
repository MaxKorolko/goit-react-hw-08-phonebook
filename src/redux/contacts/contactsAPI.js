import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().contactBook.user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Contacts', 'Users'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query(userData) {
        return {
          url: `users/signup`,
          method: 'POST',
          body: userData,
        };
      },
      invalidatesTags: ['Users'],
    }),
    logoutUser: builder.mutation({
      query(token) {
        return {
          url: `users/logout`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mutation({
      query(userData) {
        return {
          url: `users/login`,
          method: 'POST',
          body: userData,
        };
      },
      invalidatesTags: ['Users'],
    }),
    getContacts: builder.query({
      query: name => 'contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query(contactId) {
        return {
          url: `contacts/${contactId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query(contact) {
        return {
          url: `contacts`,
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useLogoutUserMutation,
  useLoginUserMutation,
} = contactsApi;
