import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/count_reducer";

// configureStore寫法的Redux需在函數式組件內使用
export default function Count() {
  //獲取下拉選項的值
  const selectNumberRef = useRef(null);
  const count = useSelector((state) => state.countReducer.value);
  const dispatch = useDispatch();

  // 奇數再加
  const incrementOfOdd = () => {
    if (count % 2 !== 0) dispatch(increment(selectNumberRef.current.value * 1));
  };

  // 異步加
  const incrementAsync = () => {
    setTimeout(() => {
      dispatch(increment(selectNumberRef.current.value * 1));
    }, 500);
  };

  return (
    <div>
      <h1>當前求和為:{count}</h1>
      <select ref={selectNumberRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button
        onClick={() => dispatch(increment(selectNumberRef.current.value * 1))}
      >
        +
      </button>
      &nbsp;
      <button
        onClick={() => dispatch(decrement(selectNumberRef.current.value * 1))}
      >
        -
      </button>
      &nbsp;
      <button onClick={incrementOfOdd}>當前求和為奇數再加</button>
      &nbsp;
      <button onClick={incrementAsync}>異步加</button>
    </div>
  );
}
