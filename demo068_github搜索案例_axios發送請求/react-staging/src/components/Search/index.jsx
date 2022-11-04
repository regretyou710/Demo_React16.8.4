import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    //獲取用戶的輸入(連續解構賦值+重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;
    console.log(keyWord);

    //發送網路請求
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   (response) => {
    //     console.log("成功了", response.data);
    //   },
    //   (error) => {
    //     console.log("失敗了", error);
    //   }
    // );

    //使用代理發送網路請求
    const url1 = `http://localhost:3000/api1/search/users?q=${keyWord}`;
    //發送請求時，域名:埠號與本地端的域名:埠號相同，所以可以簡化
    const url2 = `/api1/search/users?q=${keyWord}`;

    axios.get(url2).then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失敗了", error);
      }
    );
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
