import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import Available from './Available';
import Back from './Back';
import { fetchApis } from '../fetchApis';

const Borrow = (props) => {
  const handleClick = () => {
    fetchApis.registerBookToUser(props.bookId).then(({ status }) => {
      status && fetchApis.getBooks().then(props.setBookData);
    });
  };
  return (
    <div onClick={handleClick}>
      <Button className="borrowBtn" text="Borrow" />
    </div>
  );
};

const BookDetail = ({ bookList, setBookData }) => {
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
  ].map((d, i) => (
    <div key={i}>
      <span style={{ color: 'green' }}>{d}:</span>
      <p>{detail[d]}</p>
    </div>
  ));
  return (
    <div>
      <div className="bookDetail">
        <div key={id}>
          <img src={imageUrl} alt="bookImage" className="bookImage" />
          <Available isAvailable={detail.isAvailable} />
          <Borrow bookId={id} setBookData={setBookData} />
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
