import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d6a45d51e6e8f06f0f2611.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
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
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
