import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectFilterContacts = createSelector([
    selectContacts,
    selectFilter
], (contacts, filter) => {
    return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
})