import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  //對接收的props進行:類型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    //delete是關鍵字(詳細Demo_JS/demo046_函數的簡介/Demo01_函數的簡介.html)
    //如果函數命名為delete並且，寫成const { todos, updateTodo, delete } = this.props;傳遞則會error
    const { todos, updateTodo, deleteTodo } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
