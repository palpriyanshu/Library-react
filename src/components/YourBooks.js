import React, { useState, useEffect } from 'react';
import { fetchApis } from '../fetchApis';
import Button from './Button';

const ReturnBook = (props) => {
  const handleClick = () => {
    fetchApis.returnBook(props.bookId).then((reply) => {
      if (reply.status) {
        fetchApis.myBooks().then((books) => {
          props.setMyBooks(books);
        });
      }
    });
  };
  return <Button className="available" text="Return" onClick={handleClick} />;
};

const YourBook = (props) => {
  const [myBooks, setMyBooks] = useState(null);
  useEffect(() => {
    fetchApis.myBooks().then(setMyBooks);
  }, []);

  if (!myBooks) {
    return <p>Loading</p>;
  }
  console.log(myBooks);
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
        <ReturnBook bookId={book.id} setMyBooks={setMyBooks} />
      </div>
    </div>
  ));

  return <div style={{ margin: '20px' }}>{booksDiv}</div>;
};

export default YourBook;
