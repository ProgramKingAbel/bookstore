import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/features/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>     
      <ul>
        
      </ul>
    
    </>
  );
};

export default BookList;
