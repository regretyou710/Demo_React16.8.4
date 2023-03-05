import React from "react";
import { ReactDOM } from "react-dom";

// class Demo extends React.Component {
//   state = { count: 0 };

//   add = () => {
//     this.setState((state, props) => {
//       return { count: state.count + 1 };
//     });
//   };

//   unmount = () => {
//     // ReactDOM.unmountComponentAtNode(document.getElementById("root"));

//     // React 18版本寫法
//     this.props.root.unmount();
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state, props) => ({
//         count: state.count + 1,
//       }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h2>當前求和為:{this.state.count}</h2>
//         <button onClick={this.add}>點我+1</button>
//         <button onClick={this.unmount}>卸載組件</button>
//       </div>
//     );
//   }
// }

function Demo(props) {
  // console.log("Demo"); // Demo組件被調用1+n次(狀態更改就重新返回)

  const [count, setCount] = React.useState(0); // 陣列解構賦值
  const [name, setName] = React.useState("tom");

  /*
    useEffect沒傳入第二個參數時，相當於監測所有useState的狀態改變及函數組件掛載完畢，相當於useState被執行時，useEffect的第一個參數會被調用
    useEffect傳入第二個參數是空陣列時，相當於所有的狀態改變都不監測但監測函數組件掛載完畢
    useEffect傳入第二個參數是陣列並且指定某一useState，相當監測指定的useState的狀態改變及函數組件掛載完畢
   */
  React.useEffect(() => {
    console.log("@");

    let timer = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);

    return () => {
      console.log("##");
      clearInterval(timer);
    };
  }, []);

  function add() {
    // 第一種寫法
    // setCount(count + 1);

    // 第二種寫法
    setCount((count) => {
      return count + 1;
    });
  }

  function changeName() {
    setName(name + "@");
  }

  function unmount() {
    props.root.unmount();
  }

  return (
    <div>
      <h2>當前求和為:{count}</h2>
      <h2>我的名字是:{name}</h2>
      <button onClick={add}>點我+1</button>
      <button onClick={changeName}>點我改名</button>
      <button onClick={unmount}>卸載組件</button>
    </div>
  );
}

export default Demo;
