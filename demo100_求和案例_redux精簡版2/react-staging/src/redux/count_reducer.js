/* 
	1.該文件是用於創建一個為Count組件服務的reducer，reducer的本質就是一個函數
	2.reducer函數會接到兩個參數，分別為：之前的狀態(preState)，動作對象(action)
*/
import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
  name: "countReducer",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (preState, action) => {
      preState.value += action.payload;
    },
    decrement: (preState, action) => {
      preState.value -= action.payload;
    },
  },
});

// 每個case reducer函數會生成對應的Action creators
export const { increment, decrement } = countReducer.actions;
export default countReducer;
