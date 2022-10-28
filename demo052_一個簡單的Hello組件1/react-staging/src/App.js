//創建"外殼"組件App

// import React from "react";

// class App extends React.Component {
//   render() {
//     return <div>hello,react!</div>;
//   }
// }

// //暴露App組件
// export default App;

//進行代碼優化--------------------------------------------
import React, { Component } from "react";
import Hello from "./component/Hello/Hello";
import Welcome from "./component/Welcome/Welcome";

//創建並暴露App組件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
