import React, { Component } from "react";
import TableOperator from "../../tool/component/shared/TableOperator";
import style from "./style.module.less";
import { Divider, Popconfirm, Table } from "antd";
import CustomModal from "../../tool/component/shared/modal";
import FormContent from "./element/FormContent";

export default class RolePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: {},
      flag: false,
      dataRecord: "",
      title: "",
      dataList: [
        {
          id: "123",
          roleName: "root",
          desc: "root用户"
        }
      ]
    };

    this.columns = [
      {
        title: "角色",
        dataIndex: "roleName",
        key: "roleName"
        // render: (text, record, index) => {
        //   return index + 1;
        // }
      },
      {
        title: "角色描述",
        dataIndex: "desc",
        key: "desc"
      },
      {
        title: "操作",
        dataIndex: "action",
        className: "table-action-center",
        key: "action",
        // fixed: "right",
        //  width: "150px",
        render: (text, record) => {
          return (
            <span>
              <a href=" #" onClick={this.toShow(record)}>
                修改
              </a>
              <Divider type="vertical" />
              <Popconfirm
                title="确认删除?"
                onConfirm={() => this.handleDelete(record)}
              >
                <a href=" #">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];
  }

  toShow = record => () => {
    if (record) {
      this.setState({
        title: "修改权限"
      });
    } else {
      this.setState({
        title: "添加角色"
      });
    }
    let recorder = record ? record : "";
    this.setState({
      flag: true,
      dataRecord: recorder
    });
  };
  handleDelete = record => {
    return console.log(record);
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
            buttonName="添加角色"
            onButtonClick={this.toShow()}
          />
          <CustomModal
            title={this.state.title}
            flag={this.state.flag}
            handleContent={this.renderContent()}
          />
          <Table
            dataSource={this.state.dataList}
            columns={this.columns}
            rowKey="id"
          />
        </section>
      </div>
    );
  }
}
