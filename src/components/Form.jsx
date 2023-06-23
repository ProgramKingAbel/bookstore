import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const authors = ['Author 1', 'Author 2', 'Author 3', 'Author 4', 'Author 5'];

  const authorOptions = authors.map((author) => (
    <option value={author} key={uuidv4()}>{ author }</option>
  ));

  return (
    <div>
      <h2>Add book</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <select>
          <option value="" disabled>
            Select Author ▼
          </option>
          {authorOptions}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
