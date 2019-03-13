/**
 * Create by tsl on 2019/3/13
 */
import React, { Component } from "react";
import { Layout, Icon, Menu } from "antd";
import Cookies from "js-cookie";
import styles from "./style.module.less";
import image from "../../../asset/welcomeLogo.png";

const { SubMenu } = Menu;
const { Sider } = Layout;

class CustomSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Cookies.get("username") || "",
      collapsed: false,
      openKeys: [],
      bowerHeight: "calc(100vh - 112px)"
    };
  }

  componentWillMount() {}
  onCollapse = collapsed => {
    if (collapsed) {
      this.setState({ openKeys: [] });
    }
    this.setState({ collapsed });
  };
  onOpenChange = openKeys => {
    this.setState({ openKeys: [openKeys[openKeys.length - 1]] });
  };

  render() {
    return (
      <Sider
        theme="light"
        collapsed={this.props.collapsed}
        style={{ height: "100%" }}
        trigger={null}
        collapsible={true}
        breakpoint="lg"
        width={220}
        className={styles.sider}
      >
        <div className={styles.logo} id="logo">
            {/*<img src={image} />*/}
          <h1>HBDM报表管理系统</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default CustomSider;
