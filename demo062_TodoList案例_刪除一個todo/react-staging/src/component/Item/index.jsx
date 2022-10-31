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

  //刪除一個todo的回調
  handleDelete = (id) => {
    //React不認識confirm函數，要使用window.confirm()
    if (window.confirm("確定要刪除?")) this.props.deleteTodo(id);
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
        {/*
          1. 不使用柯理化的寫法
          onClick={(event) => {
            this.handleDelete(id, event);
          }}

          2. 不寫event形參:
            a. React隱含將event作為參數傳遞仍可接收到，可以不用寫
            b. 此處用不到event          
          */}
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          刪除
        </button>
      </li>
    );
  }
}
