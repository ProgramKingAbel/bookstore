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
    <ul className="wrapper">
      {Object.keys(books).map((key) => (
        books[key].map((book) => (
          <li key={key} className="card">
            <div>

              <div>
                <h2 className="category">{book.category}</h2>
                <h1 className="title">{book.title}</h1>
                <h3 className="author">{book.author}</h3>
              </div>

              <div className="actions">
                <button type="button">Comments</button>
                <hr />
                <button type="button" onClick={() => { dispatch(deleteBook(key)); }}>Remove</button>
                <hr />
                <button type="button">Edit</button>
              </div>

            </div>

            <div>60%</div>

            <div>
              <h3 className="chapter">Current Chapter</h3>
              <h4 className="lesson">Chapter 8</h4>
              <button className="update-progress" type="button">UPDATE PROGRESS</button>
            </div>

          </li>
        ))
      ))}
    </ul>
  );
};

export default BookList;
