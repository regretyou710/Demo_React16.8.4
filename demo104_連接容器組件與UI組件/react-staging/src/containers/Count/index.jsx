// 引入Count的UI組件
import CountUI from "../../components/Count";

// 引入connect用於連接UI組件與redux
import { connect } from "react-redux";

// 使用connect()()創建並暴露一個Count的容器組件
export default connect()(CountUI);
