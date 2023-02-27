import React, { Component } from "react";

export default class Count extends Component {
  // state = { count: 0 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
  };

  // 減法
  decrement = () => {
    const { value } = this.selectNumber;
  };

  // 奇數再加
  incrementOfOdd = () => {
    const { value } = this.selectNumber;
  };

  // 異步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
  };

  render() {
    return (
      <div>
        <h1>當前求和為:???</h1>
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
