import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
