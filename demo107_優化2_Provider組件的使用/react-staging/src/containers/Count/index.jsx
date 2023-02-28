// 引入Count的UI組件
import CountUI from "../../components/Count";

//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

// 引入connect用於連接UI組件與redux
import { connect } from "react-redux";

// 映射狀態
// function mapStateToProps(state) {
//   return { count: state };
// }

// 映射操作狀態的方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (number) => {
//       // 通知redux執行加法
//       dispatch(createIncrementAction(number));
//     },
//     decrement: (number) => {
//       dispatch(createDecrementAction(number));
//     },
//     incrementAsync: (number, time) => {
//       dispatch(createIncrementAsyncAction(number, time));
//     },
//   };
// };

// 使用connect()()創建並暴露一個Count的容器組件
/*
  1.Count容器組件的父組件APP，透過Count的props傳遞store給Count容器組件使用
  2.react-redux的connect傳遞mapStateToProps mapDispatchToProps函數時，
    2-1.會將store的state作為實參傳入mapStateToProps函數
    (react-redux的connect在執行mapStateToProps函數時，react-redux已經執行完store.getState()
    並將返回值state作為實參傳入mapStateToProps函數)
    
    2-2.會將store的dispatch作為實參傳入mapDispatchToProps函數
    (react-redux的connect在執行mapDispatchToProps函數時，react-redux已經執行完store.dispatch(action)
    並將返回值dispatch作為實參傳入mapDispatchToProps函數)    
*/
export default connect(
  (state) => ({ count: state }),

  // mapDispatchToProps的一般寫法(傳遞函數)
  // (dispatch) => ({
  //   increment: (number) => {
  //     dispatch(createIncrementAction(number));
  //   },
  //   decrement: (number) => {
  //     dispatch(createDecrementAction(number));
  //   },
  //   incrementAsync: (number, time) => {
  //     dispatch(createIncrementAsyncAction(number, time));
  //   },
  // })

  // mapDispatchToProps的簡寫(傳遞對象)
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(CountUI);

/*
  因為const createIncrementAction = (data) => ({ type: INCREMENT, data });
  {
    increment: (data) => ({ type: INCREMENT, data }),   
  }

  所以UI組件執行加法的this.props.increment(value * 1)時，就是執行(data) => ({ type: INCREMENT, data })
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };

  簡寫:
  {
    increment: createIncrementAction,   
  }

  又因為createIncrementAction會返回action，react-redux會自動執行dispatch
*/
