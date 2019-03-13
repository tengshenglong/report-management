import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./business/login/LoginPage";
import { Form } from "antd";
import Layout from "./tool/component/layout/CustomLayout";

const Login = Form.create()(LoginPage);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    );
  }
}

export default App;
