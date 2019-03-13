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

class CustomLayou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: Cookies.get("username") || "",
            collapsed: false,
            openKeys: [],
            bowerHeight: "calc(100vh - 112px)"
        };
    }

    render() {
        return (
            <Layout>
                <Sider/>
                <Layout>
                    <Header/>
                    <Content>
                        content
                    </Content>
                </Layout>
            </Layout>
        );
    }

}

export default CustomLayou;
