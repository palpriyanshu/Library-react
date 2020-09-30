import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Available from './Available';

const StyledBook = styled.div`
  padding: 10px;
  text-align: center;
  width: 30vh;
  margin: 15px;
  box-shadow: 0 0 5px #ccc;

  &:hover {
    box-shadow: 0 0 5px #aaa;
  }
`;

const BookCover = styled.img`
  width: 150px;
  height: 200px;
  border: 1px solid #ccc;
`;

const BookName = styled(Link)`
  color: #444;
  text-align: center;
  margin: 10px;

  &:hover {
    color: #222;
  }
`;

const StyledAvailable = styled(Available)`
  margin: '20px';
`;

const Book = (props) => {
  const { title: name, imageUrl: img, isAvailable, id } = props.details;
  return (
    <StyledBook>
      <div>
        <BookCover src={img} alt={name}></BookCover>
      </div>
      <BookName to={`/library/detail/${id}`}>{name}</BookName>
      <StyledAvailable isAvailable={JSON.parse(isAvailable)}></StyledAvailable>
    </StyledBook>
  );
};

export default Book;
