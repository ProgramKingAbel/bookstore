import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';


const BookList = () => {
  const books = useSelector(state => state.book.books)
  return (
  <ul>
    {books.map((book) => (
      <BookItem key={book.id} />
    ))}
    </ul>
  )
};

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,

    }),
  ).isRequired,
};

export default BookList;
