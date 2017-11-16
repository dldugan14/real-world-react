import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";

import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Login from "./components/login";
import App from "./components/App";
import store from "./Store"
import Home from "./components/Home";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {<Route path="/login" component={Login} />}
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);