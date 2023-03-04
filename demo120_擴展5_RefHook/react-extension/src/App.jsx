import React, { Component } from "react";
import Demo from "./components/5_RefectHook";

export default class App extends Component {
  render() {
    return (
      <div>
        <Demo root={this.props.root} />
      </div>
    );
  }
}
