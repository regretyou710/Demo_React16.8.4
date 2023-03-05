import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "奔馳c36", stus: ["小張", "小李", "小王"] };

  changeCar = () => {
    // 給setSatet傳遞新的對象
    this.setState({ carName: "邁巴赫" });

    // const obj = this.state;
    // obj.carName = "邁巴赫";
    // console.log(obj === this.state);
    // // 給setSatet傳遞引用的對象，PureComponent底層進行淺對比
    // this.setState(obj);
  };

  addStu = () => {
    // const { stus } = this.state;
    // stus.unshift("小劉");
    // this.setState({ stus });

    const { stus } = this.state;
    this.setState({ stus: ["小劉", ...stus] });
  };

  render() {
    console.log("Parent---render");

    const { carName } = this.state;

    return (
      <div className="parent">
        <h3>我是Parent組件</h3>
        {this.state.stus}
        <br />
        <span>我的車名字是:{carName}</span>
        <br />
        <button onClick={this.changeCar}>點我換車</button>
        <button onClick={this.addStu}>添加一個小劉</button>

        {/* 當父組件傳遞的props不同時，子組件才重新渲染 */}
        {/* <Child carName={carName} /> */}
        <Child carName="奧拓" />
      </div>
    );
  }
}

class Child extends PureComponent {
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
