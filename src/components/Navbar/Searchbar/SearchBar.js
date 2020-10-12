import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      placeholder: "Search here",
    };
  }
  changeHandler(event) {
    this.setState({ inputValue: event.target.value });
    console.log("val:" + this.state.inputValue);
  }
  render() {
    return (
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          type="search"
          value={this.state.inputValue}
          placeholder={this.state.placeholder}
          onChange={this.changeHandler.bind(this)}
        />
      </div>
    );
  }
}
export default SearchBar;
