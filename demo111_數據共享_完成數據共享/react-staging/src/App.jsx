import React, { Component } from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";

// 引入store組件
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 給組件容器傳遞store */}
        {/* <Count store={store} /> */}

        {/* 
          1.如果有若干個容器組件，則每個組件身上都需要傳遞store，所以react-redux提供Prodiver API。
            Prodiver會自動分析整個應用所有的容器組件，把store傳遞到每一個需要store的組件容器裡面。

          2.往App組件向上找父組件index.js
        */}
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}
