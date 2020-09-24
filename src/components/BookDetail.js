import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import Available from './Available';
import Back from './Back';
import { fetchApis } from '../fetchApis';

const Borrow = ({ bookId, setBookDetail }) => {
  const handleClick = () => {
    fetchApis.registerBookToUser(bookId).then(({ status }) => {
      status && fetchApis.getBook(bookId).then(setBookDetail);
    });
  };
  return <Button className="borrowBtn" text="Borrow" onClick={handleClick} />;
};

const BookDetail = (props) => {
  const { id, title } = useParams();
  const [bookDetail, setBookDetail] = useState(null);

  useEffect(() => {
    fetchApis.getBook(id).then(setBookDetail);
  }, []);

  if (!bookDetail) {
    return <p>Loading</p>;
  }

  const {
    imageUrl,
    Genre,
    pageCount,
    description,
    publishedDate,
    publisher,
    author,
  } = bookDetail;

  const bookInfo = [
    id,
    Genre,
    pageCount,
    description,
    publishedDate,
    publisher,
    author,
  ].map((d, i) => (
    <div key={i}>
      <span style={{ color: 'green' }}>{d}:</span>
      <p>{bookDetail[d]}</p>
    </div>
  ));

  return (
    <div>
      <div className="bookDetail">
        <div key={id}>
          <img src={imageUrl} alt="bookImage" className="bookImage" />
          <Available isAvailable={JSON.parse(bookDetail.isAvailable)} />
          <Borrow bookId={id} setBookDetail={setBookDetail} />
          <Back url="/library/category/All" />
        </div>
        <div>
          <h3>{title}</h3> {bookInfo}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
