import React, { Component } from "react";

// 引入connect用於連接UI組件與redux
import { connect } from "react-redux";

//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

class Count extends Component {
  // state = { count: 0 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };

  // 減法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };

  // 奇數再加
  incrementOfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) this.props.increment(value * 1);
  };

  // 異步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  };

  render() {
    // console.log("UI組件接收到的props是", this.props);

    return (
      <div>
        <h2>我是Count組件，下方組件總人數為:{this.props.personCount.length}</h2>
        <h1>當前求和為:{this.props.count}</h1>
        <select ref={(currentNode) => (this.selectNumber = currentNode)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>
        &nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <button onClick={this.incrementOfOdd}>當前求和為奇數再加</button>
        &nbsp;
        <button onClick={this.incrementAsync}>異步加</button>
      </div>
    );
  }
}

// 使用connect()()創建並暴露一個Count的容器組件
export default connect(
  // 映射操作狀態的方法
  (state) => ({ count: state.countReducer, personCount: state.personReducer }),
  // 映射狀態
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(Count);
