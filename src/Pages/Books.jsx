import React from 'react';
import { BookList, Form } from '../components';
import '../styles/BookPage.css';

const Books = () => (
  <div className="page-books">
    <BookList />
    <Form />
  </div>
);

export default Books;
