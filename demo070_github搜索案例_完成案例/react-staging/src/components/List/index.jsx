import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;

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
}
