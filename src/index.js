import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

const Index = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
serviceWorker.unregister();
