import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchApis } from '../api/fetchApis';
import Button from './Button';

const YourBookDiv = styled.div`
  width: 50%;
  margin-top: 10vh;
  margin-left: 40vh;
`;

const StyledYourBook = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  margin: 10px;

  &:hover {
  border-bottom: 1px solid #888;
  `;

const YourBookImg = styled.img`
  height: 140px;
  width: 100px;
  margin: 10px;
`;

const YourBookBox = styled.div`
  margin: 10px;
`;

const Msg = styled.h3`
  margin-top: 20vh;
  margin-left: 70vh;
`;

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
  return <Button text="Return" onClick={handleClick} backgroundColor="#eee" />;
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
    return <Msg>You don't have any book</Msg>;
  }
  const booksDiv = myBooks.map((book) => (
    <StyledYourBook key={book.id}>
      <YourBookImg src={book.imageUrl} alt="book"></YourBookImg>
      <YourBookBox>
        <h2>{book.title}</h2>
        <ReturnBook bookId={book.id} setMyBooks={setMyBooks} />
      </YourBookBox>
    </StyledYourBook>
  ));

  return <YourBookDiv>{booksDiv}</YourBookDiv>;
};

export default YourBook;
