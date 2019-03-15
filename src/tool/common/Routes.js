import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../component/WelcomePage";
import ChartsPage from "../../business/charts/ChartsPage";
import TableDemo from "../../business/tables/TableDemo";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={WelcomePage} />
    <Route path="/charts/CustomCharts" component={ChartsPage} />
    <Route path="/tables/TableDemo" component={TableDemo}/>
    <Route render={() => <h1>找不到此页面</h1>} />
  </Switch>
);

export default Routes;
