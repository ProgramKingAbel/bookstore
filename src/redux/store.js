import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './features/books/booksSlice';
import categoriesReducer from "./features/categories/categoriesSlice";

const store = configureStore({
    reducer: {
        book: bookReducer,
        category: categoriesReducer,
    }
})

export default store;