import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  handlerKeyUp = (event) => {
    //解構賦值獲取keyCode，target
    const { target, keyCode } = event;

    //判斷是否是回車按鍵
    if (keyCode !== 13) return;

    //添加的todo名字不能為空
    if (target.value === "") {
      alert("輸入不能為空");
      return;
    }

    //準備好一個todo對象
    const todoObj = { id: nanoid(), name: target.value, done: false };

    //將todoObj傳遞給App
    //調用父組件自定義函數並傳遞參數
    this.props.addTodo(todoObj);

    //清除輸入
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handlerKeyUp}
          type="text"
          placeholder="請輸入你的任務名稱，按回車鍵確認"
        />
      </div>
    );
  }
}
