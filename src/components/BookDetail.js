import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Available from './Available';
import Back from './Back';
import { fetchApis } from '../api/fetchApis';

const StyledBookDetail = styled.div`
  margin: 20px;
  display: flex;
`;

const BookDetailLeftSec = styled.div`
  width: 150px;
  margin: 10px;
`;

const BookImg = styled.img`
  border: 1px solid #ccc;
  width: 90%;
  height: 150px;
`;

const Borrow = ({ bookId, setBookDetail }) => {
  const handleClick = () => {
    fetchApis.registerBookToUser(bookId).then(({ status }) => {
      status && fetchApis.getBook(bookId).then(setBookDetail);
    });
  };
  return (
    <Button
      text="Borrow"
      onClick={handleClick}
      backgroundColor=" rgb(71, 179, 187)"
    />
  );
};

const BookDetail = (props) => {
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState(null);

  useEffect(() => {
    fetchApis.getBook(id).then(setBookDetail);
  }, [id]);

  if (!bookDetail) {
    return <p>Loading</p>;
  }

  const fieldOfDetails = [
    'id',
    'author',
    'Genre',
    'pageCount',
    'description',
    'publisher',
    'publishedDate',
  ];

  const bookInfo = fieldOfDetails.map((field) => (
    <div key={field}>
      <h4 style={{ color: '#888' }}>{field}</h4>
      <p>{bookDetail[field]}</p>
    </div>
  ));

  const isAvailable = JSON.parse(bookDetail.isAvailable);

  const borrowOption = isAvailable ? (
    <Borrow bookId={id} setBookDetail={setBookDetail} />
  ) : (
    <></>
  );

  return (
    <div>
      <StyledBookDetail>
        <BookDetailLeftSec key={id}>
          <BookImg src={bookDetail.imageUrl} alt="bookImage"></BookImg>
          <Available isAvailable={isAvailable} />
          {borrowOption}
          <Back url="/library/category/All" />
        </BookDetailLeftSec>
        <div>
          <h3>{bookDetail.title}</h3> {bookInfo}
        </div>
      </StyledBookDetail>
    </div>
  );
};

export default BookDetail;
