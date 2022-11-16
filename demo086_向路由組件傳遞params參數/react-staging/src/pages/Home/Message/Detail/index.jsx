import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "這是消息1內容" },
  { id: "02", content: "這是消息2內容" },
  { id: "03", content: "這是消息3內容" },
];

export default class Detail extends Component {
  render() {
    //向組件傳東西都需要借助props，所以路由傳遞params可以在props內檢視
    console.log(this.props);

    //接收params參數
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
