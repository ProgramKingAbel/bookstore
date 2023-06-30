import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/features/books/booksSlice';
import '../styles/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookValue, setBookValue] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(), title: bookValue, author, category: selectedCategory,
    };
    dispatch(addBook(newBook));
    setBookValue('');
    setAuthor('');
    setSelectedCategory('');
  };

  return (
    <div className="form-wrapper">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-title"
          required
          type="text"
          placeholder="Book title"
          value={bookValue}
          onChange={(e) => setBookValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select required className="c-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Nature">Nature</option>
          <option value="Action">Action</option>
          <option value="Nutrition">Nutrition</option>
        </select>
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
