import React, { useState, useEffect } from 'react';
import { fetchApis } from '../fetchApis';
import Button from './Button';

const YourBook = (props) => {
  const [myBooks, setMyBooks] = useState(null);
  useEffect(() => {
    fetchApis.myBooks().then(setMyBooks);
  }, []);

  if (!myBooks) {
    return <p>Loading</p>;
  }
  const booksDiv = myBooks.map((book) => (
    <div
      style={{
        display: 'flex',
        margin: '20px',
        borderBottom: '1px solid #ccc',
      }}
      key={book.id}
    >
      <img src={book.imageUrl} alt="book" />
      <div style={{ margin: '10px' }}>
        <h1>{book.title}</h1>
        <Button className="available" text="Submit" />
      </div>
    </div>
  ));

  return <div style={{ margin: '20px' }}>{booksDiv}</div>;
};

export default YourBook;
