import React from 'react';
import { useParams } from 'react-router-dom';
import Available from './Available';

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
    <div>
      <div className="bookDetail">
        <div>
          <img src={imageUrl} alt="bookImage" className="bookImage" />
          <Available isAvailable={bookInfo.isAvailable} />
        </div>
        <div>
          <h3>{title}</h3> {bookInfo}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
