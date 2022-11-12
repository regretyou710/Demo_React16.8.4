import React, { Component } from "react";
//import axios from "axios";
import Pubsub from "pubsub-js";

export default class Search extends Component {
  search = () => {
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
    fetch(url2)
      .then(
        (response) => {
          console.log("聯繫服務器成功了");

          //將成功狀態獲取到的數據存到Promise對象中並返回
          return response.json();
        }
        /*
        ,(error) => {
          console.log("聯繫服務器失敗了", error);

          //在聯繫服務器失敗時返回的Promise對象的狀態是fulfilled(成功)，
          //所以在下個then進行調用時會是在response裡面輸出
          //為了是在下個then調用是在error是在error裡面輸出，可以使用Promise狀態來決定
          //1. 在上一個then中的error拋出 throw new Error()-->返回的Promise狀態為rejected
          //2. 在上一個then中的error返回一個Promise對象-->狀態為pending

          //此處的需求:當聯繫服務器失敗時就不需要再往下走，就此中斷
          //返回狀態為pending的Promise對象，下個then就不會執行(只在fulfilled或rejected才進行)
          return new Promise(() => {});
        }
        */
      )
      .then(
        (response) => {
          //讀取成功狀態下儲存的數據
          console.log("獲取數據成功了", response);
        }
        /*
        ,(error) => {
          console.log("獲取數據失敗了", error);
        }
        */
      )
      .catch((error) => {
        //透過catch統一處理錯誤
        console.log("請求出錯了", error);
      });
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
