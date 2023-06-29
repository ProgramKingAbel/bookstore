import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/features/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <ul>
        {Object.keys(books).map((key) => (
          books[key].map((book) => (
            <BookItem key={key} book={book} id={key} />
          ))
        ))}
      </ul>

    </>
  );
};

export default BookList;
