import React from 'react';

const BookItem = ({ itemProp }) => {
  return (
    <li>
      <div>

       <div>
        <h2>{itemProp.category}</h2>
        <h1>{itemProp.title}</h1>
        <h3>{itemProp.author}</h3>  
        </div>

        <div>
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
        </div>
        
      </div>

      <div>{itemProp.completed}</div>
      
      <div>
        <h3>Current Chapter</h3>
        <h4>{itemProp.currentChapter}</h4>
        <button>Update Progress</button>
      </div>
      
    </li>
  )
};

export default BookItem;
