import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/features/books/booksSlice';
import '../styles/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookValue, setBookValue] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(), title: bookValue, author, category: 'Fiction',
    };
    dispatch(addBook(newBook));
    setBookValue('');
    setAuthor('');
  };

  return (
    <div className="form-wrapper">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-title"
          type="text"
          placeholder="Book Title"
          value={bookValue}
          onChange={(e) => setBookValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
