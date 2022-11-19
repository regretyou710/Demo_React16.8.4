import React, { Component } from "react";
// import qs from "querystromg";//React 18版本以前寫法
// import qs from "qs";

const DetailData = [
  { id: "01", content: "這是消息1內容" },
  { id: "02", content: "這是消息2內容" },
  { id: "03", content: "這是消息3內容" },
];

export default class Detail extends Component {
  render() {
    //向組件傳東西都需要借助props，所以路由傳遞params可以在props內檢視
    console.log("Detail->", this.props);

    //接收params參數
    // const { id, title } = this.props.match.params;

    //接收search參數
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1)); //將問號去除

    //接收state參數
    /**
     * url不會顯示傳遞的參數，但在刷新頁面時也不會造成傳遞參數丟失而無法顯示頁面資料
     * 是因為使用BrowserRouter，他對瀏覽器的history進行操作，將傳遞的參數暫存在裡面
     * 
     * React 18版本以前，在清除cookie後this.props.location.state會是undefined
     * 所以要加判斷
     * 
     * //空對象取屬性=>undefined
     * const { id, title } = this.props.location.state || {};
     * const findResult = DetailData.find((detailObj) => {
         return detailObj.id === id;
        }) || {};     
     */
    const { id, title } = this.props.location.state || {};

    const findResult =
      DetailData.find((detailObj) => {
        return detailObj.id === id;
      }) || {};

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
