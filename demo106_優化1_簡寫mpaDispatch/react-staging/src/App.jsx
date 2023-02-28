import React, { Component } from "react";
import Count from "./containers/Count";

// 引入store組件
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 給組件容器傳遞store */}
        <Count store={store} />
      </div>
    );
  }
}
