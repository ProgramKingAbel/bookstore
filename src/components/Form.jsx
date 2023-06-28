import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { added } from '../redux/features/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [bookValue, setBookValue] = useState('');
  const [author, setauthor] = useState('');

  return (
    <div>
      <h2>Add book</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author Name" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
