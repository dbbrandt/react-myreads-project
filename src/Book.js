import React from "react";
import PropTypes from "prop-types";

import SelectBookshelf from "./SelectBookshelf";

const Book = props => {
  const { book, shelf, onChangeShelf } = props;
  const imageLinks = book.imageLinks;

  // handle covers for books with missing imageLinks
  const thumbnail = Boolean(imageLinks) ? `url(${imageLinks.thumbnail})` : null;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `${thumbnail}`
          }}
        />
        <SelectBookshelf
          book={book}
          shelf={shelf}
          onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

SelectBookshelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Book;
