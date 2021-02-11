import SearchBar from "./SearchBar";
import React from "react";
import unsplash from "../api/usplash";
import "semantic-ui-css/semantic.min.css";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
    // f.then((s) => console.log(s));
    // this.setState({ data: e.target.value });
  };
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found :{this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
