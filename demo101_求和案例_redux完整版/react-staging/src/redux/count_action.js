/* 
	該文件專門為Count組件生成action對象
*/
import { INCREMENT, DECREMENT } from "./constant";

export const cerateIncrementAction = (data) => ({ type: INCREMENT, data });
export const cerateDecrementAction = (data) => ({ type: DECREMENT, data });
