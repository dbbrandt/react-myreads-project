import React from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import { SHELVES } from "./SelectBookshelf";

const Bookcase = props => {
  const { onChangeShelf, books, history } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {SHELVES.map(
          (shelf, index) =>
            shelf.label !== "none" && (
              <Bookshelf
                key={index}
                name={shelf.label}
                books={books}
                onChangeShelf={onChangeShelf}
              />
            )
        )}
      </div>
      <div className="open-search">
        <button onClick={() => history.push("/search")}>Add a book</button>
      </div>
    </div>
  );
};

Bookcase.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Bookcase;
