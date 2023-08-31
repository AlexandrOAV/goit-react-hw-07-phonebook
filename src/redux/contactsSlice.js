import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const initialState = {
  contacts: []
};

const persistConfig = {
  key: 'contacts',
  storage
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    })
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default persistReducer(persistConfig, contactsSlice.reducer);

export const selectContacts = state => state.contacts.contacts;