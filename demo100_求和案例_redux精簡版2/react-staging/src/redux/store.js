/* 
	該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count_reducer";

export default configureStore({
  reducer: {
    countReducer: countReducer.reducer,
  },
});
