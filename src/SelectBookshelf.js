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
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  componentDidMount() {
    this.setState({
      selectedOption: this.props.book.shelf
    });
  }

  handleChange = event => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const bookId = this.props.book.id;
    this.setState({ selectedOption });
    this.props.onChangeShelf(selectedOption, bookId);
  };

  render() {
    const currentShelf = this.props.book.shelf;
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} defaultValue={currentShelf}>
          <option key="move" disabled>
            Move to...
          </option>
          {SHELVES.map( (shelf, index)  => (
            <option key={index} value={shelf.value}>{shelf.label}</option>
          ))}
        </select>
      </div>
    );
  }
}

SelectBookshelf.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default SelectBookshelf;
