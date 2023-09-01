import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContacts, fetchContacts } from './operation';




const initialState = {
   items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
   .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContacts.pending, handlePending)
  .addCase(deleteContacts.fulfilled, (state, action) => {
   state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    }),
}
)




export default contactsSlice.reducer;