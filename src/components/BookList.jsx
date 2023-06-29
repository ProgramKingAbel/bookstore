import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/features/books/booksSlice';
import '../styles/BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <ul>
      {Object.keys(books).map((key) => (
        books[key].map((book) => (
          <li key={key}>
            <div>

              <div>
                <h2>{book.category}</h2>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
              </div>

              <div>
                <button type="button">Comments</button>
                <button type="button" onClick={() => { dispatch(deleteBook(key)); }}>Remove</button>
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
        ))
      ))}
    </ul>
  );
};

export default BookList;
