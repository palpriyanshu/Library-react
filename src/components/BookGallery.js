import React from 'react';
import Book from './Book';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

const BookDetail = ({ bookList }) => {
  const { title } = useParams();
  const detail = bookList.find((details) => details.title === title);
  return (
    <div>
      <h3>{title}</h3>
      <img src={detail.imageUrl.thumbnail} />
      <p>{detail.Genre}</p>
    </div>
  );
};

const BookGallery = function (props) {
  const books = props.bookList.map((details) => (
    <Book key={details.id} details={details} />
  ));

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{books}</div>
      <Switch>
        <Route exact path="/library/detail/:title">
          <BookDetail bookList={props.bookList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default BookGallery;
