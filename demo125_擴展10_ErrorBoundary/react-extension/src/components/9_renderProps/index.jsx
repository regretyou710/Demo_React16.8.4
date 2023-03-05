import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent組件</h3>
        {/* A、B為父子關係方式一 */}
        {/* <A>Hello!</A> */}

        {/* A、B為父子關係方式二 */}
        {/* <A>
          <B />
        </A> */}

        {/* A、B為父子關係方式二:A組件向B組件傳遞A狀態的屬性 */}
        <A
          render={(name) => {
            return <B name={name} />;
          }}
        />
      </div>
    );
  }
}

// A、B為父子關係方式一
// class A extends Component {
//   state = { name: "tom" };

//   render() {
//     console.log(this.props);

//     return (
//       <div className="a">
//         <h3>我是A組件</h3>
//         {this.props.children}
//         <B name={this.state.name} />
//       </div>
//     );
//   }
// }

// A、B為父子關係方式二
// class A extends Component {
//   render() {
//     console.log(this.props);

//     return (
//       <div className="a">
//         <h3>我是A組件</h3>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// A、B為父子關係方式二:A組件向B組件傳遞A狀態的屬性
class A extends Component {
  state = { name: "tom" };

  render() {
    console.log(this.props);

    return (
      <div className="a">
        <h3>我是A組件</h3>
        {this.props.render(this.state.name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log("B---render");

    return (
      <div className="b">
        <h3>我是B組件,{this.props.name}</h3>
      </div>
    );
  }
}
