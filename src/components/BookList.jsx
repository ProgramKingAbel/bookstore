import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <ul>
      {books.map((book, i) => (
        <BookItem key={book.item_id} id={i} />
      ))}
    </ul>
  );
};

export default BookList;
