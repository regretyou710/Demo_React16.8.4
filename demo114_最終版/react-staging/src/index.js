//引入react核心庫
import React from "react";
//引入ReactDOM
//import ReactDOM from "react-dom";
//引入App組件
import App from "./App";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";

// 渲染App到組件
// React 17版本寫法
// ReactDOM.render(<App />, document.getElementById("root"));

// React 18版本寫法
const root = createRoot(document.getElementById("root"));
root.render(
  // 此處需要用Provider包裹App，目的是讓App所有的後代容器組件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>
);

// 檢測redux中狀態的變化，只要變化，就調用render，整個APP重新渲染
// 容器組件中的connect擁有默認監測redux裡面狀態改變的功能
// store.subscribe(() => {
//   root.render(<App />);
// });
