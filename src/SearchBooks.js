import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchBar from "./SearchBar";

const SearchBooks = props => {
  const {
    books,
    searchResults,
    history,
    onChangeShelf,
    onSubmitSearch
  } = props;

  return (
    <div className="search-books">
      <SearchBar
        history={history} // Pass history to support Route navigation
        onSubmitSearch={onSubmitSearch}
      />
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 ? (
            searchResults.map((searchBook, index) => {
              // Get shelf of existing book in bookcase if found.
              const shelfBook = books.find(book => book.id === searchBook.id);
              const shelf = Boolean(shelfBook) ? shelfBook.shelf : "none";
              return (
                <li key={index}>
                  <Book
                    book={searchBook}
                    shelf={shelf}
                    onChangeShelf={onChangeShelf}
                  />
                </li>
              );
            })
          ) : (
            <p>No results.</p>
          )}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.prototypes = {
  searchResults: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onAddBook: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default SearchBooks;
