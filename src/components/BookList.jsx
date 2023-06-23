import React from 'react';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => {
  return (
    <ul>
      {booksProps.map((book) => (
        <BookItem key={book.id} itemProp={ book } />
      ))}
    </ul>
  )
};

export default BookList;
