import "./App.css";
import React, { Component } from "react";
import Hello from "./Hello";
import { getProductDataApi } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    (async () => {
      const data = await getProductDataApi();
      this.setState({ data: data });
    })();
  }
  render() {
    return (
      <>
        <Hello />
      </>
    );
  }
}

export default App;
