import React, { useState } from 'react';
import BookList from './BookList';

const BooksLogic = () => {
  const [books, setBooks] = useState(
    [
      {
        id: 1,
        title: 'Book 1',
        category: 'Action',
        author: 'Abel Morara',
        completed: '65%',
        currentChapter: 'Chapter 3',
      },
      {
        id: 2,
        title: 'Book 2',
        category: 'Fiction',
        author: 'Martin King',
        completed: '80%',
        currentChapter: 'Chapter 1',
      },
      {
        id: 3,
        title: 'Book 3',
        category: 'Economy',
        author: 'Some Author',
        completed: '99%',
        currentChapter: 'Chapter 10',
      },

    ],
  );

  return (
    <div>
      <BookList booksProps={books} setBooks={setBooks} />
    </div>
  );
};

export default BooksLogic;
