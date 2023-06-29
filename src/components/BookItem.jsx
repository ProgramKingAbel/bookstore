import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/features/books/booksSlice';

const BookItem = ({ id, book }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>

        <div>
          <h2>{book.category}</h2>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
        </div>

        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={() => { dispatch(deleteBook(id)); }}>Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>

      <div>60%</div>

      <div>
        <h3>Current Chapter</h3>
        <h4>Chapter 8</h4>
        <button type="button">Update Progress</button>
      </div>

    </li>
  );
};

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
