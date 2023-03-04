//引入react核心庫
import React from "react";
//引入ReactDOM
//import ReactDOM from "react-dom";
//引入App組件
import App from "./App";
import { createRoot } from "react-dom/client";

//渲染App到組件
// React 17版本寫法
// ReactDOM.render(<App />, document.getElementById("root"));

// React 18版本寫法
//createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(<App />);
