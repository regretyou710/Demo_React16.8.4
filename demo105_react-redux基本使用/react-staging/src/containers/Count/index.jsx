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

/*
    1.mapStateToProps函數返回的是一個對象；
    2.返回的對象中的key就作為傳遞給UI組件props的key,value就作為傳遞給UI組件props的value
    3.mapStateToProps用於傳遞狀態
*/
function mapStateToProps(state) {
  return { count: state };
}

/*
    1.mapDispatchToProps函數返回的是一個對象；
    2.返回的對象中的key就作為傳遞給UI組件props的key,value就作為傳遞給UI組件props的value
    3.mapDispatchToProps用於傳遞操作狀態的方法
*/
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (number) => {
      // 通知redux執行加法
      dispatch(createIncrementAction(number));
    },
    decrement: (number) => {
      dispatch(createDecrementAction(number));
    },
    incrementAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
};

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
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
