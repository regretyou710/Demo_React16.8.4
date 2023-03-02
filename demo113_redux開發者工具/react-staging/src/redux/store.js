/* 
	該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore，專門用於創建redux中最為核心的store對象
// import { createStore, applyMiddleware } from "redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

//引入為Count組件服務的reducer
import countReducer from "./reducers/count";
//引入為Person組件服務的reducer
import personReducer from "./reducers/person";
//引入redux-thunk，用於支持異步action
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

// 彙總所有reducer變為一個總的reducer
const reducers = combineReducers({
  countReducer: countReducer,
  personReducer: personReducer,
});
//暴露store
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
