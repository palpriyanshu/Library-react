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
  return <Button className="button" text="Return" onClick={handleClick} />;
};

const YourBook = (props) => {
  const [myBooks, setMyBooks] = useState(null);
  useEffect(() => {
    fetchApis.myBooks().then(setMyBooks);
  }, []);

  if (!myBooks) {
    return <p>Loading</p>;
  }

  if (!myBooks.length) {
    return (
      <h3 style={{ marginTop: '20vh', marginLeft: '70vh' }}>
        You don't have any book
      </h3>
    );
  }
  const booksDiv = myBooks.map((book) => (
    <div className="yourBook" key={book.id}>
      <img src={book.imageUrl} alt="book" />
      <div style={{ margin: '10px' }}>
        <h2>{book.title}</h2>
        <ReturnBook bookId={book.id} setMyBooks={setMyBooks} />
      </div>
    </div>
  ));

  return <div className="yourBookDiv">{booksDiv}</div>;
};

export default YourBook;
