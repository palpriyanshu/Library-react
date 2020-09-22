import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ bookList }) => {
  const { title } = useParams();
  const detail = bookList.find((details) => details.title === title);
  const {
    id,
    imageUrl,
    Genre,
    pageCount,
    description,
    publishedDate,
    publisher,
    author,
  } = detail;
  const bookInfo = [
    id,
    Genre,
    pageCount,
    description,
    publishedDate,
    publisher,
    author,
  ].map((d) => (
    <div key={d}>
      <span style={{ color: 'green' }}>{d}:</span>
      <p>{detail[d]}</p>
    </div>
  ));
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <img
        src={imageUrl.thumbnail}
        style={{ marginRight: '20px', width: '150px', height: '200px' }}
      />
      <div>
        <h3>{title}</h3>
        {bookInfo}
      </div>
    </div>
  );
};

export default BookDetail;
