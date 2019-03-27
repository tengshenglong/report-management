import React, { Component } from "react";
import TableOperator from "../../tool/component/shared/TableOperator";
import style from "./style.module.less";
import CustomModal from "../../tool/component/shared/modal";
import TreeRender from "./element/TreeRender";
import FormContent from "./element/FormContent";
export default class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: {},
      flag: false,
      dataRecord: "",
      title: "",
    };

  }
  toShow = record => () => {
    if (record) {
      this.setState({
        title: "菜单管理"
      });
    } else {
      this.setState({
        title: "菜单管理"
      });
    }
    let recorder = record ? record : "";
    this.setState({
      flag: true,
      dataRecord: recorder
    });
  };

  cancel = () => {
    this.setState({
      flag: false
    });
  };
  renderContent = () => {
    return (
      <FormContent handleCancel={this.cancel} content={this.state.dataRecord} />
    );
  };
  render() {
    return (
      <div>
        <section className={style["table-wrapper"]}>
          <TableOperator
            hasSearchBox={false}
            buttonName="添加一级菜单"
            onButtonClick={this.toShow()}
          />
          <CustomModal
            title={this.state.title}
            flag={this.state.flag}
            handleContent={this.renderContent()}
          />
         <TreeRender />
        </section>
      </div>
    );
  }
}
