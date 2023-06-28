import { createSlice } from '@reduxjs/toolkit';

const initialState = { books: [] };

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    added: (state, action) => state.push(action.payload),
    removed: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export default bookSlice.reducer;
export const { added, removed } = bookSlice.actions;
