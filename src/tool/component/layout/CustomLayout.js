/**
 * Create by tsl on 2019/3/13.
 */
import React, { Component } from "react";
import { Layout } from "antd";
import styles from "./style.module.less";
import Header from "../header/CustomHeader";
import Sider from "../menu/CustomSider";
import Routes from "../../common/Routes";

const { Content } = Layout;

class CustomLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKeys: []
    };
  }
  handleCollapse = collapsed => {
    this.setState({ collapsed: collapsed });
  };
  render() {
    return (
      <Layout>
        <Sider collapsed={this.state.collapsed} />
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            onCollapse={this.handleCollapse}
          />
          <Content className={styles.content}>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default CustomLayout;
