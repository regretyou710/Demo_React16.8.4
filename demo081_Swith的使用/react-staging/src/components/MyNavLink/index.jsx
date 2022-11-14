import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      // 因為都是相同樣式，所以進行NavLink的二次封裝
      //   <NavLink
      //     activeClassName="navStyle"
      //     className="list-group-item"
      //     {...this.props}
      //   >
      //     {this.props.children}
      //   </NavLink>

      // 標籤體配置在標籤屬性中
      // 也可以透標籤屬性children呈現標籤體內容(因為children本來就是NavLink的特殊屬性)
      <NavLink
        activeClassName="navStyle"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
