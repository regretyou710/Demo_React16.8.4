import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  //全選checkbox的回調
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  //清除已完成任務的回調
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //已完成的個數
    const doneCount = todos.reduce((pre, currentElement) => {
      return pre + (currentElement.done ? 1 : 0);
    }, 0);

    //總數
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任務
        </button>
      </div>
    );
  }
}
