import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  addObject = () => {
    const { count } = this.state;

    // this.setState函數是同步，但是渲染狀態更新過程是異步
    this.setState({ count: count + 1 }, () => {
      console.log("更新狀態後輸出(異步)", this.state.count);
    });
    // console.log("更新狀態後輸出(同步)", this.state.count);
  };

  addFunction = () => {
    this.setState(
      (state, props) => {
        console.log(state, props);
        return {
          count: state.count + 1,
        };
      },
      () => {
        console.log("回調函數", this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        <h2>當前求和為:{this.state.count}</h2>
        <button onClick={this.addObject}>對象式的state，點我+1</button>
        <button onClick={this.addFunction}>函數式的state，點我+1</button>
      </div>
    );
  }
}
