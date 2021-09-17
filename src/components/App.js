import "../stylesheet/App.scss";
import React, { Component } from "react";
import data from "../data/data.json";
import PokeList from "./PokeList";

console.log(data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: data,
    };
  }

  render() {
    return (
      <>
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList list={this.state.dataList} />
      </>
    );
  }
}

export default App;
