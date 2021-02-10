import SearchBar from "./SearchBar";
import React from "react";
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  state = { data: "" };
  onSearchSubmit = (e, d) => {
    console.log(d);
    // this.setState({ data: e.target.value });
  };
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
