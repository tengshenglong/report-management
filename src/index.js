import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const Index = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
