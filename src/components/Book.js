import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const BookDetail = ({ details }) => {
  return (
    <div>
      <h3>{details.name}</h3>
      <img src={details.img} />
      <p>{details.types}</p>
    </div>
  );
};

const Book = (props) => {
  const { title: name, imageUrl: img } = props.details;
  return (
    <BrowserRouter>
      <div>
        <div
          style={{ padding: '10px', textAlign: 'center', width: '100px' }}
          value={name}
        >
          <Link to={`/library/detail/${name}`}>{name.toUpperCase()}</Link>
          <img src={img.thumbnail} alt={name} />
        </div>
        <Switch>
          <Route exact path={`/library/detail/${name}`}>
            <BookDetail details={props.details} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Book;
