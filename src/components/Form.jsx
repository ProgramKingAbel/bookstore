import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { added } from '../redux/features/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [bookValue, setBookValue] = useState('');
  const [author, setAuthor] = useState('');
  const newBook = { item_id: uuidv4(), title: bookValue, author };

  return (
    <div>
      <h2>Add book</h2>
      <form>
        <input
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
        <button type="button" onClick={() => { dispatch(added(newBook)); }}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
