import React from "react";
import ReactDOM from "react-dom";
import "./css/vendor/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "alertifyjs/build/css/alertify.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux-store/redux-reducers/configureStore";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
