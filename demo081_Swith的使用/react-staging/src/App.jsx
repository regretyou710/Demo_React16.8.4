import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About"; //About是路由組件
import Home from "./pages/Home"; //Home是路由組件
import Header from "./components/Header"; //Header是一般組件
import MyNavLink from "./components/MyNavLink";
import Test from "./pages/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>轉跳不同的頁面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* 在React中靠路由鏈結實現切換組件--編寫路由鏈結 */}
              {/* 使用二次封裝的NavLink */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
