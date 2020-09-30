import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const StyledBookGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BookGallery = function (props) {
  const books = props.bookList.map((details) => (
    <Book key={details.id} details={details} />
  ));
  return <StyledBookGallery>{books}</StyledBookGallery>;
};

export default BookGallery;
