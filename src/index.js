import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
//react-router ^2.8.1
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./Store";
import App from "./components/App";
import Article from "./components/Article/index";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import index from "./components/Settings/index";
import Editor from "./components/Editor"

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={index} />
        <Route path="article/:id" component={Article} />
        <Route path="editor" component={Editor} />
        <Route path="editor/:slug" component={Editor} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);