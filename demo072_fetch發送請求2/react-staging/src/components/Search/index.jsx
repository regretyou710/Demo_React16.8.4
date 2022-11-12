import React, { Component } from "react";
//import axios from "axios";
import Pubsub from "pubsub-js";

export default class Search extends Component {
  search = async () => {
    //獲取用戶的輸入(連續解構賦值+重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;

    console.log(keyWord);
    console.log("Search組件發佈消息了");

    //使用代理發送網路請求
    //const url1 = `http://localhost:3000/api1/search/users?q=${keyWord}`;
    //發送請求時，域名:埠號與本地端的域名:埠號相同，所以可以簡化
    const url2 = `/api1/search/users2?q=${keyWord}`;

    //#region //使用訂閱發佈設計模式
    //發送請求前通知List更新狀態
    Pubsub.publish("listSubscribe", {
      isFirst: false,
      isLoading: true,
    });

    //#region 發送網路請求--使用axios
    // axios.get(url2).then(
    //   (response) => {
    //     //請求成功後通知List更新狀態
    //     Pubsub.publish("listSubscribe", {
    //       users: response.data.items,
    //       isLoading: false,
    //     });
    //   },
    //   (error) => {
    //     //請求失敗後通知List更新狀態
    //     Pubsub.publish("listSubscribe", {
    //       isLoading: false,
    //       error: error.message,
    //     });
    //   }
    // );
    //#endregion
    //#endregion

    //#region 發送網路請求--使用fetch
    try {
      const response = await fetch(url2);

      if (
        response.status.toString().substring(0, 1) === "4" ||
        response.status.toString().substring(0, 1) === "5"
      )
        throw new Error("聯繫伺服器失敗");

      const data = await response.json();
      console.log(data);

      //請求成功後通知List更新狀態
      Pubsub.publish("listSubscribe", {
        users: data.items,
        isLoading: false,
      });
    } catch (error) {
      console.log("請求出錯", error);

      //請求失敗後通知List更新狀態
      Pubsub.publish("listSubscribe", {
        isLoading: false,
        error: error.message,
      });
    }
    //#endregion
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用戶</h3>
        <div>
          <input
            ref={(currentNode) => (this.keyWordElement = currentNode)}
            type="text"
            placeholder="輸入關鍵詞點擊搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
