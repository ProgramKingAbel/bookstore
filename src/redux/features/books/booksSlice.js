import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = localStorage.getItem('appId');
const BASE_URL = `${process.env.REACT_APP_MY_BOOKSTORE_URL}${APP_ID}/books`;

const initialState = {
  books: {},
  error: '',
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios.get(BASE_URL).then((response) => response.data));
export const deleteBook = createAsyncThunk('book/deleteBook', async (itemId, { dispatch }) => {
  await axios.delete(`${BASE_URL}/${itemId}`);
  const response = await dispatch(fetchBooks());
  return response.payload;
});

export const addBook = createAsyncThunk('book/addBook', async (book, { dispatch }) => {
  await axios.post(BASE_URL);
  const response = await dispatch(fetchBooks());
  return response.payload;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.books = {};
      state.error = action.error.message;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = action.payload;
      state.error = '';
    });
  },
});

export default bookSlice.reducer;
export const { added, removed } = bookSlice.actions;
