/* 
	該文件專門為Count組件生成action對象
*/
import { INCREMENT, DECREMENT } from "./constant";
import store from "./store";

//同步action，就是指action的值為Object類型的一般對象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//異步action，就是指action的值為函數,異步action中一般都會調用同步action，異步action不是必須要用的。
export const createIncrementAsyncAction = (data, time) => {
  //   return () => {
  //     setTimeout(() => {
  //       //第一次由Count組件透過store.dispatch傳入action後等待
  //       //時間到後，再一次調用store.dispatch傳入action執行reducer並返回結果
  //       store.dispatch(cerateIncrementAction(data));
  //     }, time);
  //   };

  // return的內容，是由store調用，並會傳入dispatch函數作為實數，所以可以簡化
  return (dispatch) => {
    // console.log(dispatch);
    setTimeout(() => {
      //第一次由Count組件透過store.dispatch傳入action後等待
      //時間到後，再一次調用store.dispatch傳入action執行reducer並返回結果
      dispatch(createIncrementAction(data));
    }, time);
  };
};
