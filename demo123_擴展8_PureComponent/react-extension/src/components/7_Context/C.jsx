import React, { Component } from "react";
const MyContext = React.createContext();

export default class C extends Component {
  //聲明接收context
  static contextType = MyContext;
  render() {
    const { username, age } = this.context;
    return (
      <div className="grand">
        <h3>我是C組件</h3>
        <h4>
          我從A組件接收到的用戶名:{username},年齡是{age}
        </h4>
      </div>
    );
  }
}
