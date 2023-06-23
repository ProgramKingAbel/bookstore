import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ itemProp }) => (
  <li>
    <div>

      <div>
        <h2>{itemProp.category}</h2>
        <h1>{itemProp.title}</h1>
        <h3>{itemProp.author}</h3>
      </div>

      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>

    </div>

    <div>{itemProp.completed}</div>

    <div>
      <h3>Current Chapter</h3>
      <h4>{itemProp.currentChapter}</h4>
      <button type="button">Update Progress</button>
    </div>

  </li>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
