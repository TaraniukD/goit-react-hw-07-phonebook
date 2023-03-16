import {createSlice} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
      },
    reducers: {
      createContact(state, action) {
        state.contacts.push(action.payload)
      },
      deleteContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
      },
    },
  })

  export const { createContact, deleteContact } = contactsSlice.actions;

  const contactReducer = contactsSlice.reducer;

  const persistConfig = {
    key: 'contactsList',
    storage,
  }

  export const persistedReducer = persistReducer(persistConfig, contactReducer);

