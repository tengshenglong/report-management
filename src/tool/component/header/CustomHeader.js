/**
 * Create by tsl on 2019/3/13
 */
import React, { Component } from "react";
import { Layout, Icon } from "antd";
import Cookies from "js-cookie";
import style from "./style.module.less";

const { Header } = Layout;

class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: Cookies.get("username") || ""
        };
    }

    render() {
        return (
            <Header className={style.header}>
                <Icon
                    className={style.icon}
                    type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
                    // onClick={this.handleCollapse}
                />
                <Icon className={style.icon} type="logout" style={{ float: "right",marginRight:"20px" }} />
            </Header>
        );
    }

}

export default CustomHeader;