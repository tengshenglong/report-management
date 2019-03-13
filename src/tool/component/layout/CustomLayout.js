/**
 * Create by tsl on 2019/3/13.
 */
import React, { Component } from "react";
import { Layout } from "antd";
import Cookies from "js-cookie";
import styles from "./style.module.less";
import Header from "../header/CustomHeader";
import Sider from "../menu/CustomSider";

const { Content } = Layout;

class CustomLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Cookies.get("username") || "",
      collapsed: false,
      openKeys: [],
      bowerHeight: "calc(100vh - 112px)"
    };
  }
  handleCollapse = collapsed => {
        this.setState({ collapsed: collapsed});
    };
  render() {
    return (
      <Layout>
        <Sider collapsed={this.state.collapsed}/>
        <Layout>
          <Header collapsed={this.state.collapsed} onCollapse={this.handleCollapse}/>
          <Content>content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default CustomLayout;
