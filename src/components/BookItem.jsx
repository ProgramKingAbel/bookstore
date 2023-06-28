import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removed } from '../redux/features/books/booksSlice';

const BookItem = ({ id }) => {
  const book = useSelector((state) => state.book.books[id]);

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
          <button type="button">Remove</button>
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
  id: PropTypes.number.isRequired,
};
