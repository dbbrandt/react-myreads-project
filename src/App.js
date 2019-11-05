import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import AddBooks from "./AddBooks";
import Bookcase from "./Bookcase";

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
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
     as the bookshelf, therefore, we need to check both book arrays
     and update the shelf and add to the bookshelf for newly added book.
   */
  handleShelfChange = (shelf, bookId) => {
    console.log(`${shelf} - ${bookId}`);
    const { books, searchResults } = this.state;

    // Find the book in the current bookshelf
    const book = books.find(book => book.id === bookId);

    // Find the book in the search results
    const searchBook = searchResults.find(book => book.id === bookId);
    // If found in the search results update the shelf
    if (searchBook) {
      searchBook.shelf = shelf;
      // Add to the bookshelf if newly categorized.
      if (!book) {
        books.push(searchBook);
      }
    }

    // Update self for books already in bookshelf.
    if (book) {
      book.shelf = shelf;
    }

    this.setState({ books: books, searchResults: searchResults });
  };

  render() {
    const { books, searchResults } = this.state;
    return (
      <Router>
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
              <AddBooks
                {...props}
                books={searchResults}
                onSubmitSearch={query => this.handleSearch(query)}
                onAddBook={this.handleShelfChange}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
