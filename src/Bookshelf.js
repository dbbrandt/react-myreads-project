import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = props => {
  const { shelf, books, onChangeShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            (book, index) =>
              book.shelf === shelf.value && (
                <li key={index}>
                  <Book
                    book={book}
                    shelf={book.shelf}
                    onChangeShelf={onChangeShelf}
                  />
                </li>
              )
          )}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Bookshelf;
