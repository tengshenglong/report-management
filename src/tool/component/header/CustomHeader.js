/**
 * Create by tsl on 2019/3/13
 */
import React, { Component } from "react";
import { Layout, Icon } from "antd";
import Cookies from "js-cookie";
import style from "./style.module.less";
import Bread from "../breadcrumb/CustomBread";

const { Header } = Layout;

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Cookies.get("username") || ""
    };
  }
  handleCollapse = e => {
    e && e.preventDefault();
    this.props.onCollapse(!this.props.collapsed);
  };

  logout = () =>{
      Cookies.remove("username", { path: "" });
      window.location.href = "/login";
    // this.props.history.push("/login");
  };

  render() {
    return (
      <Header className={style.header}>
        <Icon
          className={style.icon}
          type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.handleCollapse}
          style={{ float: "left", marginLeft: "-50px" }}
        />
        <Bread />
        <Icon
          className={style.icon}
          type="logout"
          onClick={this.logout}
          style={{ float: "right", marginRight: "-35px" }}
        />
      </Header>
    );
  }
}

export default CustomHeader;
