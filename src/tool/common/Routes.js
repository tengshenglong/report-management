import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../component/WelcomePage";
import CustomCharts from "../../business/charts/CustomCharts";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={WelcomePage} />
    <Route path="/charts/CustomCharts" component={CustomCharts} />
    <Route render={() => <h1>找不到此页面</h1>} />
  </Switch>
);

export default Routes;
