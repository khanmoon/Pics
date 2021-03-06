import React from "react";

class SearchBar extends React.Component {
  state = { data: "" };
  onInputChange(e) {
    // console.log(this);
    this.setState({ data: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.data);
  }
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
          <label className="field">Image Search</label>
          {/* <label className="field"></label> */}
          <input
            value={this.state.data}
            type="text"
            onChange={this.onInputChange}
            onSubmit={this.onFormSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
