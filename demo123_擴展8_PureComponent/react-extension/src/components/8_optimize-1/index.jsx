import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  state = { carName: "奔馳c36" };

  changeCar = () => {
    this.setState({ carName: "邁巴赫" });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 解決只要執行setState(),即使不改變狀態數據, 組件也會重新render() ==> 效率低
    // console.log(this.props, this.state); //目前的props和state
    // console.log(nextProps, nextState); //接下要變化的目標props，目標state

    return !(this.state.carName === nextState.carName);
  }

  render() {
    console.log("Parent---render");

    const { carName } = this.state;

    return (
      <div className="parent">
        <h3>我是Parent組件</h3>
        <span>我的車名字是:{carName}</span>
        <br />
        <button onClick={this.changeCar}>點我換車</button>

        {/* 當父組件傳遞的props不同時，子組件才重新渲染 */}
        <Child carName={carName} />
        {/* <Child carName="奧拓" /> */}
      </div>
    );
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 解決只當前組件重新render(), 就會自動重新render子組件，縱使子組件沒有用到父組件的任何數據 ==> 效率低
    console.log(this.props, this.state); //目前的props和state
    console.log(nextProps, nextState); //接下要變化的目標props，目標state

    return !(this.props.carName === nextProps.carName);
  }

  render() {
    console.log("Child---render");

    return (
      <div className="child">
        <h3>我是Child組件</h3>
        <span>我接到的車名字是:{this.props.carName}</span>
      </div>
    );
  }
}
