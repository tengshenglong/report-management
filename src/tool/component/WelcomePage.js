import React, { Component } from "react";
import Cookies from "js-cookie";
import styles from "./style.module.less";

class WelcomePage extends Component {

  componentWillMount() {
    //判断登陆状态
    if (!Cookies.get("username")) {
      window.location.href = "/login";
      return;
    }
  }

  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.content}>
          <div>
            <img src={require("../../asset/welcomeLogo.png")} alt="" />
          </div>
          <div className={styles.font}>HBDM报表管理系统</div>
        </div>
      </div>
    );
  }
}
export default WelcomePage;
