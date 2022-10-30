import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import "./App.css";

export default class App extends Component {
  //初始化狀態
  state = {
    todos: [
      { id: "001", name: "吃飯", done: true },
      { id: "002", name: "睡覺", done: true },
      { id: "003", name: "打代碼", done: false },
      { id: "004", name: "逛街", done: true },
    ],
  };

  //自定義函數在賦值給子組件屬性，透過子組件調用父組件函數傳遞實參，父組件接收到後更改狀態內容
  //addTodo用於添加一個todo，接收的參數是todo對象
  addTodo = (todoObj) => {
    //獲取原todos
    const { todos } = this.state;

    //追加一個todo
    const newTodos = [todoObj, ...todos];
    
    //更新狀態
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
