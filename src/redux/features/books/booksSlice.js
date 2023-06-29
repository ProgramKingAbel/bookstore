import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = localStorage.getItem('appId');

const initialState = {
  users: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get()
});


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
