import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  onChange = event => {
    const query = event.target.value;
    this.setState({ query: query });
    if (query !== "") {
      this.props.onSubmitSearch(query);
    }
  };

  render() {
    const { history } = this.props;
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
