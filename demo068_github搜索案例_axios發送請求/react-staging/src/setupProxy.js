//引入內置模塊
const proxy = require("http-proxy-middleware");

//暴露對象
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api1", {
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    })
  );
};
