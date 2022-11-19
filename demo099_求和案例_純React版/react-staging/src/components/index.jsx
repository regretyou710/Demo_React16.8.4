import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };

  increment = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    // this.setState({ count: count + Number(value) });
    this.setState({ count: count + value * 1 }); //強制轉型
  };

  decrement = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    this.setState({ count: count - value * 1 });
  };

  incrementOfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    if (count % 2 !== 0) this.setState({ count: count + value * 1 });
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + value * 1 });
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>當前求和為:{this.state.count}</h1>
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
