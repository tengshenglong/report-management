import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../component/WelcomePage";
import ChartsPage from "../../business/charts/ChartsPage";
import TableDemo from "../../business/tables/TableDemo";
import StepPage from "../../business/steps/StepPage";
import UserPage from "../../business/user/UserPage";
import RolePage from "../../business/role/RolePage";
import ProPage from "../../business/pro/ProPage";
import MenuPage from "../../business/menus/MenuPage";
import InsPage from "../../business/industry/InsPage";


const Routes = () => (
  <Switch>
    <Route path="/" exact component={WelcomePage} />
    <Route path="/charts/CustomCharts" component={ChartsPage} />
    <Route path="/tables/TableDemo" component={TableDemo} />
    <Route path="/steps/StepPage" component={StepPage} />
    <Route path="/user/UserPage" component={UserPage} />
    <Route path="/role/RolePage" component={RolePage} />
    <Route path="/menus/MenuPage" component={MenuPage} />
    <Route path="/pro/ProPage" component={ProPage} />
    <Route path="/industry/InsPage" component={InsPage} />
    <Route render={() => <h1>找不到此页面</h1>} />
  </Switch>
);

export default Routes;
