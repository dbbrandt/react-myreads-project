import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchBar from "./SearchBar";

class AddBooks extends Component {
  render() {
    const { books, history, onAddBook } = this.props;
    const count = books.length;
    return (
      <div className="search-books">
        <SearchBar
          history={history}
          onSubmitSearch={query => this.props.onSubmitSearch(query)}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            {count > 0 ? (
              books.map((book, index) => (
                <li key={index}>
                  <Book book={book} onChangeShelf={onAddBook} />
                </li>
              ))
            ) : (
              <p>No results.</p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

AddBooks.prototypes = {
  books: PropTypes.array.isRequired,
  onAddBook: PropTypes.func.isRequired
};

export default AddBooks;
