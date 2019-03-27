import React, { Component } from "react";
import TableOperator from "../../tool/component/shared/TableOperator";
import style from "./style.module.less";
import { Divider, Popconfirm, Table } from "antd";
import moment from "moment";
import CustomModal from "../../tool/component/shared/modal";
// import FormContent from "./element/FormContent";
export default class InsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: {},
      flag: false,
      dataRecord: "",
      title: "",
      dataList: [
        {
          code: "AA",
          name: "admin",
          ins: "icebox",
          date: "1124234"
        }
      ]
    };

    this.columns = [
      {
        title: "产品组CODE",
        dataIndex: "code",
        key: "code"
        // render: (text, record, index) => {
        //   return index + 1;
        // }
      },
      {
        title: "产品组名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "所属产业",
        dataIndex: "ins",
        key: "ins"
      },
      {
        title: "日期",
        dataIndex: "date",
        key: "date",
        render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "")
      },
      {
        title: "操作",
        dataIndex: "action",
        className: "table-action-center",
        key: "action",
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
        title: "产业信息"
      });
    } else {
      this.setState({
        title: "添加产品组"
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
      {/*<FormContent handleCancel={this.cancel} content={this.state.dataRecord} />*/}
    );
  };
  render() {
    return (
      <div>
        <section className={style["table-wrapper"]}>
          <TableOperator
            hasSearchBox={false}
            buttonName="新建用户"
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
            // scroll={{ x: 1366 }}
            rowKey="account"
          />
        </section>
      </div>
    );
  }
}
