import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/features/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <ul>
      {books.map((book, i) => (
        <BookItem key={book.item_id} id={i} />
      ))}
    </ul>
  );
};

export default BookList;
