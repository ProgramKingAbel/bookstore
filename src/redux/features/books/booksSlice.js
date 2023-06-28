import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    added: (state, action) => { state.books.push(action.payload); },
    removed: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { added, removed } = bookSlice.actions;
