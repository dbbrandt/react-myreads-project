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

  handleShelfChange = (shelf, bookId) => {
    console.log(`Update book: ${bookId} set shelf to ${shelf}`);
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
                onChangeShelf={this.handleShelfChange}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
