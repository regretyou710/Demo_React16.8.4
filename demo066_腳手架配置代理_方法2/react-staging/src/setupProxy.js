//引入內置模塊
const proxy = require("http-proxy-middleware");

//暴露對象
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api1", {
      //遇見/api1前綴的請求，就會觸發該代理配置
      target: "http://localhost:5000", //請求轉發給誰
      changeOrigin: true, //控制服務器收到的請求頭中Host的值
      pathRewrite: { "^/api1": "" }, //重寫請求路徑(必須)
    }),
    proxy.createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
