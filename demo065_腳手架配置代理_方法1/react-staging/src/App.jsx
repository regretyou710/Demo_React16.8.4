import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/students").then(
      (response) => {
        console.log("成功了!", response.data);
      },
      (error) => {
        console.log("失敗了!", error);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>點我獲取學生數據</button>
      </div>
    );
  }
}
