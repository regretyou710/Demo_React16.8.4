//引入react核心庫
import React from "react";
//引入ReactDOM
//import ReactDOM from "react-dom";
//引入App組件
import App from "./App";
import { createRoot } from "react-dom/client";
import store from "./redux/store";

//渲染App到組件
// React 17版本寫法
// ReactDOM.render(<App />, document.getElementById("root"));

// React 18版本寫法
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//檢測redux中狀態的變化，只要變化，就調用render，整個APP重新渲染
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
