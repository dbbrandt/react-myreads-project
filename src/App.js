import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Bookcase from "./Bookcase";

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: [],
    isLoading: true
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books: books }))
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  /* Handle search and store state at the top level so user can flip back to add and see prior search results */
  handleSearch = query => {
    BooksAPI.search(query).then(books => {
      this.setState({
        searchResults: books
      });
    });
  };

  /* This function handle both existing bookcase changes and new books.
     We want the search results to reflect the same shelf categorization
     as the bookshelf, therefore, we need to check both state arrays
     and update the shelf and/or add to the bookshelf for newly added book.
   */
  handleShelfChange = (shelf, bookId) => {
    const { books, searchResults } = this.state;

    // Find the book in the current bookshelf and search results
    const book = books.find(book => book.id === bookId);
    const searchBook = searchResults.find(book => book.id === bookId);

    if (searchBook) {
      // If found in the search results update the search results shelf.
      searchBook.shelf = shelf;
      // If new book,  add to bookshelf.
      if (!book) {
        BooksAPI.update(searchBook, shelf).then(res => {
          console.log(`Update result: ${res}`);
          books.push(searchBook);
        });
      }
    } else {
      // If existing book, update self.
      if (book) {
        book.shelf = shelf;
      }
    }

    this.setState({ books: books, searchResults: searchResults });
  };

  render() {
    const { books, searchResults, isLoading } = this.state;
    return (
      <Router>
        {isLoading ? (
          <div className="loader">{false}</div>
        ) : (
          <div className="app">
            <Route
              exact
              path="/"
              render={props => (
                <Bookcase
                  {...props}
                  books={books}
                  onChangeShelf={this.handleShelfChange}
                />
              )}
            />
            <Route
              path="/search"
              render={props => (
                <SearchBooks
                  {...props}
                  searchResults={searchResults}
                  books={books}
                  onSubmitSearch={query => this.handleSearch(query)}
                  onAddBook={this.handleShelfChange}
                />
              )}
            />
          </div>
        )}
      </Router>
    );
  }
}

export default BooksApp;
