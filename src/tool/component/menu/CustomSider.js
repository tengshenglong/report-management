/**
 * Create by tsl on 2019/3/13
 */
import React, { Component } from "react";
import { Layout, Icon, Menu } from "antd";
import styles from "./style.module.less";
import { Link } from "react-router-dom";
// import image from "../../../asset/welcomeLogo.png";

 const { SubMenu } = Menu;
const { Sider } = Layout;

class CustomSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: []
    };
  }

  componentWillMount() {}

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
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/tables/TableDemo">
              <Icon type="table" />
              <span>表格示例</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/charts/CustomCharts">
              <Icon type="video-camera" />
              <span>图表演示</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/steps/StepPage">
              <Icon type="upload" />
              <span>流程处理</span>
            </Link>
          </Menu.Item>
          <SubMenu key="baseManagement" title={<span><Icon type="user" />基础管理</span>}>
            <Menu.Item key="4">
              <Link to="/user/UserPage">
                <Icon type="user" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/role/RolePage">
                <Icon type="user" />
                <span>角色管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/menus/MenuPage">
                <Icon type="user" />
                <span>菜单管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/pro/ProPage">
                <Icon type="user" />
                <span>产品组管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/industry/InsPage">
                <Icon type="user" />
                <span>产业管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>
    );
  }
}

export default CustomSider;
