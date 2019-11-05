import React, { Component } from "react";
import { PropTypes } from "prop-types";
// import Select from "react-select";

export const SHELVES = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want To Read" },
  { value: "read", label: "Read" },
  { value: "none", label: "None" }
];

class SelectBookshelf extends Component {

  handleChange = event => {
    this.props.onChangeShelf(event.target.value, this.props.book.id);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} defaultValue={this.props.shelf}>
          <option key="move" disabled>
            Move to...
          </option>
          {SHELVES.map((shelf, index) => (
            <option key={index} value={shelf.value}>
              {shelf.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

SelectBookshelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default SelectBookshelf;
