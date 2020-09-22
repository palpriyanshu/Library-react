import React from 'react';
import BookGallery from './BookGallery.js';

class SearchableGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  }

  filteredGallery(bookList) {
    return bookList.filter(({ title }) =>
      title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  }

  render() {
    const filteredList = this.filteredGallery(this.props.bookList);
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.searchTerm}
          style={{ margin: '20px' }}
        />
        <BookGallery className={this.props.className} bookList={filteredList} />
      </div>
    );
  }
}

export default SearchableGallery;
