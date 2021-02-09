import React from "react";

class SearchBar extends React.Component {
  state = { data: "" };
  onInputChange(e) {
    console.log(this);
    this.setState({ data: e.target.value.toUpperCase() });
  }
  constructor(props) {
    console.log(props);
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label className="field">Image Search</label>
          <label className="field">{this.state.data}</label>
          <input
            value={this.state.data}
            type="text"
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
