import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";

import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Login from "./components/Login";
import App from "./components/App";
import store from "./Store"
import Home from "./components/Home";
import Register from "./components/Register";
import Settings from "./components/Settings";


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {<Route path="/login" component={Login} />}
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);