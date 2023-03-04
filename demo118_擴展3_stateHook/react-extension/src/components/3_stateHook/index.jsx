import React from "react";

// class Demo extends React.Component {
//   state = { count: 0 };

//   add = () => {
//     this.setState((state, props) => {
//       return { count: state.count + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>當前求和為:{this.state.count}</h2>
//         <button onClick={this.add}>點我+1</button>
//       </div>
//     );
//   }
// }

function Demo() {
  console.log("Demo"); // Demo組件被調用1+n次(狀態更改就重新返回)

  /*
   第一次返回時React.useState(0)將count保存起來
   再次調用Demo組件時，const [count,setCount] = React.useState(0);確實執行，但不會因為再次執行將count的值覆蓋
  */
  const [count, setCount] = React.useState(0); // 陣列解構賦值
  const [name, setName] = React.useState("tom");

  function add() {
    // 第一種寫法
    // setCount(count + 1);

    // 第二種寫法
    setCount((count) => {
      return count + 1;
    });
  }

  function changeName() {
    setName("mary");
  }

  return (
    <div>
      <h2>當前求和為:{count}</h2>
      <h2>我的名字是:{name}</h2>
      <button onClick={add}>點我+1</button>
      <button onClick={changeName}>點我改名</button>
    </div>
  );
}

export default Demo;
