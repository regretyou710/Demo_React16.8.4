import { ADD_PROPER } from "../constant";

// 創建增加一個人的action動作對象
export const createAddPersonAction = (personObj) => ({
  type: ADD_PROPER,
  data: personObj,
});
