import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  //初始化狀態
  state = { users: [] };

  saveUsers = (users) => {
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    );
  }
}
