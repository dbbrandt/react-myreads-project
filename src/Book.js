import React from "react";
import PropTypes from "prop-types";

import SelectBookshelf from "./SelectBookshelf";

const Book = props => {
  const { book, onChangeShelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        />
        {/*{console.log(book)}*/}
        <SelectBookshelf book={book} onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

SelectBookshelf.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Book;
