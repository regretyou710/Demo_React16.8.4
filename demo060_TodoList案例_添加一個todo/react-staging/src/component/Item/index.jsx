import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    //標示鼠標移入、移出
    mouse: false,
  };

  //鼠標移入、移出的回調
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  //勾選、取消勾選某一個todo的回調
  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleChange(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          刪除
        </button>
      </li>
    );
  }
}
