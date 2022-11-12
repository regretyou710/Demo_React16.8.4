import React, { Component } from "react";
import "./index.css";
import Pubsub from "pubsub-js";

export default class List extends Component {
  //初始化狀態
  state = {
    users: [], //users初始值為數組
    isFirst: true, //是否為第一次打開頁面
    isLoading: false, //標示是否處於加載中
    error: "", //儲存請求相關的錯誤訊息
  };

  render() {
    const { users, isFirst, isLoading, error } = this.state;

    return (
      <div className="row">
        {isFirst ? (
          "歡迎使用,請輸入關鍵字,隨後點擊搜索"
        ) : isLoading ? (
          "加載中..."
        ) : error ? (
          <h2 style={{ color: "red" }}>{error}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="head_portrait"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }

  componentDidMount() {
    this.token = Pubsub.subscribe("listSubscribe", (msg, data) => {
      console.log("List組件收到數據了", data);
      this.setState(data);
    });
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token);
  }
}
