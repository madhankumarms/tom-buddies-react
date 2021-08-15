import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buddies: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((buddiesList) => {
        this.setState({ buddies: buddiesList });
      });
  }

  render() {
    const { buddies, searchField } = this.state;
    const filteredData = buddies.filter((elem) =>
      elem.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="heading">Tom Buddies</h1>
        <SearchBox
          placeholder="Search tom"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList cats={filteredData} />
      </div>
    );
  }
}

export default App;
