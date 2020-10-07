import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Back from './Back';
import Button from './Button';
import { fetchApis } from '../api/fetchApis';

const BookRegistrationForm = styled.div`
  margin-left: 470px;
  padding: 20px;
  box-shadow: 4px 4px 10px #ccc;
  width: 500px;

  &:hover {
    box-shadow: 4px 4px 10px #888;
  }
`;

const BookCoverImage = styled.img`
  margin: 0.3vh 0.3vh 1vh 0.3vh;
  height: 32vh;
`;

const InputBox = ({ type, label, name }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    setValue(input);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        onChange={handleChange}
        type={type}
        value={value}
        name={name}
        required
      />
    </div>
  );
};

const AddBook = (props) => {
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (e) => {
    const [image] = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(`${reader.result}`);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetchApis.addBook(data).then(() => history.goBack());
  };

  return (
    <BookRegistrationForm>
      <h2>Book Details</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <InputBox type="text" label="Title" name="title" />
        <InputBox type="text" label="ISBN" name="id" />
        <InputBox type="text" label="Author" name="author" />
        <InputBox type="text" label="Genre" name="Genre" />
        <InputBox type="number" label="Page Count" name="pageCount" />
        <InputBox type="text" label="Description" name="description" />
        <InputBox type="text" label="Publisher" name="publisher" />
        <InputBox type="date" label="Published At" name="publishedDate" />
        <label htmlFor="img">Image</label>
        <input type="file" name="image" onChange={handleChange} required />
        <div>
          {imageUrl && (
            <BookCoverImage src={imageUrl} alt="preview"></BookCoverImage>
          )}
        </div>
        <br />
        <Button type="submit" backgroundColor="seagreen" text="Submit" />
        <Back />
      </form>
    </BookRegistrationForm>
  );
};

export default AddBook;
