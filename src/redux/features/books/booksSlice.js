import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = localStorage.getItem('appId');
const BASE_URL = `${process.env.REACT_APP_MY_BOOKSTORE_URL}${APP_ID}/books`;

const initialState = {
  books: {},
  error: '',
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios.get(BASE_URL).then((response) => response.data));

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    added: (state, action) => { state.books.push(action.payload); },
    removed: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.books = {};
      state.error = action.error.message;
    });
  },
});

export default bookSlice.reducer;
export const { added, removed } = bookSlice.actions;
